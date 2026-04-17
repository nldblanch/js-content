import React, {
  isValidElement,
  useState,
  cloneElement,
  type ReactNode,
} from "react";
import { Modal, useModal } from "./Modal";
import { MarkdownSummary, extractText } from "./MarkdownRenderer"; // Import the component

// The component that the `MarkdownRenderer` component
// will use for rendering <details> elements. The purpose
//  is that this component contains logic for opening and
// closing a modal. The reason is to give the user a chance
//  in case they accidentally selected to expand a hint,
// for example. In this case, they can select off the modal
//  so that they will not expose the hint. Otherwise, they can
//  click to proceed on the modal; the <details> element will
//  expand its content, showing the user the hint.
export function CustomDetails({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, open, close } = useModal();

  const childrenArray = React.Children.toArray(children);

  const summaryElement = childrenArray.find(
    (child) => isValidElement(child) && child.type === MarkdownSummary,
  ) as React.ReactElement | undefined;

  const content = childrenArray.filter(
    (child) => !(isValidElement(child) && child.type === MarkdownSummary),
  );

  const handleToggle = (e: React.MouseEvent) => {
    const summaryText = extractText(summaryElement).toLowerCase();

    // Bypass modal for Table of Contents: since
    // there is no disadvantage for accidentally
    // expanding the table of contents, there does
    // not need to be a modal confirming the user's action.
    if (summaryText.includes("table of contents")) {
      setIsExpanded((prev) => !prev);
      return;
    }

    // Standard logic for all other details elements
    e.preventDefault();
    if (!isExpanded) {
      open();
    } else {
      setIsExpanded(false);
    }
  };

  const handleConfirm = () => {
    setIsExpanded(true);
    close();
  };

  return (
    <div className="mb-4 border border-gray/20 rounded-xl bg-black-900/30 overflow-hidden">
      <div onClick={handleToggle} className="cursor-pointer">
        {summaryElement ? (
          // Clone the summary and inject the isExpanded state
          cloneElement(summaryElement, { isOpen: isExpanded } as any)
        ) : (
          <div className="p-4 text-blue font-fira text-xl">Details</div>
        )}
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-gray/20 bg-black-800/50 animate-in fade-in slide-in-from-top-2 duration-200">
          {content}
        </div>
      )}

      <Modal isOpen={isOpen} onClose={close} title="Confirm Access">
        <p className="mb-6">
          This section contains spoilers or advanced solutions. Are you sure you
          want to proceed?
        </p>
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
      </Modal>
    </div>
  );
}
