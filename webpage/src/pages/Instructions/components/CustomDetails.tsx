import React, { isValidElement, useState, cloneElement, type KeyboardEvent, type ReactNode } from 'react';
import MarkdownSummary from './MarkdownSummary';
import { Modal, useModal } from './Modal';
import { extractText } from './MarkdownRenderer';

function ConfirmActions({ onConfirm }: { onConfirm: () => void }) {
  const { close } = useModal();

  const handleConfirm = () => {
    onConfirm();
    close();
  };

  return (
    <>
      <p className="mb-6">This section contains spoilers or advanced solutions. Are you sure you want to proceed?</p>
      <div className="flex gap-3">
        <button
          onClick={handleConfirm}
          className="cursor-pointer flex-1 bg-blue text-black-700 font-bold py-2 rounded-lg hover:brightness-110"
        >
          Show Content
        </button>
        <button
          onClick={close}
          className="cursor-pointer flex-1 border border-gray/20 text-white py-2 rounded-lg hover:bg-white/5"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

// Custom <details> wrapper used by MarkdownRenderer.
// It gates expansion behind a confirmation modal.
export function CustomDetails({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const modalId = 'custom-details-confirm';

  const childrenArray = React.Children.toArray(children);

  // Split the summary from the expandable content.
  // The summary stays visible even when the body is hidden.
  const summaryElement = childrenArray.find((child) => isValidElement(child) && child.type === MarkdownSummary) as
    React.ReactElement<{ isOpen?: boolean }> | undefined;

  const content = childrenArray.filter((child) => !(isValidElement(child) && child.type === MarkdownSummary));

  const summaryText = extractText(summaryElement).toLowerCase();
  const isTableOfContents = summaryText.includes('table of contents');

  const getKeyHandler = (action: () => void) => {
    return (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        action();
      }
    };
  };

  const renderSummary = () => {
    const summaryNode = summaryElement ? (
      cloneElement(summaryElement, { isOpen: isExpanded })
    ) : (
      <div className="p-4 text-blue font-fira text-xl">Details</div>
    );

    if (isTableOfContents) {
      return (
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          onKeyDown={getKeyHandler(() => setIsExpanded((prev) => !prev))}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          {summaryNode}
        </div>
      );
    }

    if (isExpanded) {
      return (
        <div
          onClick={() => setIsExpanded(false)}
          onKeyDown={getKeyHandler(() => setIsExpanded(false))}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          {summaryNode}
        </div>
      );
    }

    return (
      <Modal.Trigger opens={modalId} asChild>
        {summaryNode}
      </Modal.Trigger>
    );
  };

  return (
    <Modal>
      <div className="mb-4 border border-gray/20 rounded-xl bg-black-900/30 overflow-hidden">
        {renderSummary()}

        {isExpanded && (
          <div className="p-4 border-t border-gray/20 bg-black-800/50 animate-in fade-in slide-in-from-top-2 duration-200">
            {content}
          </div>
        )}

        <Modal.Window id={modalId} title="Confirm Access">
          <ConfirmActions onConfirm={() => setIsExpanded(true)} />
        </Modal.Window>
      </div>
    </Modal>
  );
}
