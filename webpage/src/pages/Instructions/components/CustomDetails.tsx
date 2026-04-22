import React, {
  isValidElement,
  useState,
  cloneElement,
  type ReactNode,
} from "react";
import MarkdownSummary from "./MarkdownSummary";
import { Modal, useModal } from "./Modal";
import {  extractText } from "./MarkdownRenderer"; // Import the component


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

  // Searching through the 'children' of this 'CustomDetails' 
  // component, separate the 'MarkdownSummary' component from all 
  // the other components, with all the other components stored simply
  //  in 'content'. The reason is that the 'content' will only be shown
  //  when the user has selected the 'accept' button on the modal, ie,
  //  when the <details> element has expanded. In contrast, the 
  // 'MarkdownSummary' component will be rendered regardless; this 
  // gives the user something to click on so that the modal asking 
  // for their conformation can be rendered.
  const summaryElement = childrenArray.find(
    (child) => isValidElement(child) && child.type === MarkdownSummary,
  ) as React.ReactElement | undefined;

  const content = childrenArray.filter(
    (child) => !(isValidElement(child) && child.type === MarkdownSummary),
  );

  // On click event handler for when user clicks on <details> element.
  //  The intention here is to render a modal in this event handler, 
  // so that a modal asking for the user's confirmation is shown whenever
  //  they click to expand the <details> element.
  const handleToggle = (e: React.MouseEvent) => {
    const summaryText = extractText(summaryElement).toLowerCase();

    // Bypass modal for Table of Contents: since
    // there is no disadvantage for accidentally
    // expanding the table of contents, there does
    // not need to be a modal confirming the user's action.
    if (summaryText.includes("table of contents")) {
      // The state is revered from its current value;
      //  this enables the <details> component to behave as 
      // it normally would without the modal: click on a closed 
      // <details> to expand it; click on an open <details> to close it.
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

  // On click handler for when the user pressed the 'accept' button in the modal.
  // Will close the modal and set the 'expanded' state to true; this
  //  component will then automatically respond to the true value of
  //  the 'expanded' state: the information belonging to the <details>
  //  element will be revealed.
  const handleConfirm = () => {
    setIsExpanded(true);
    close();
  };

  return (
    <div className="mb-4 border border-gray/20 rounded-xl bg-black-900/30 overflow-hidden">
      <div onClick={handleToggle} className="cursor-pointer">
        {summaryElement ? (
          // Clone the summary and inject the isExpanded state
          // Remember that the 'isExpanded' state will be set 
          // to true only if the user selects 'confirm' on the 
          // modal that appears. If this state set to true, the 
          // 'customDetails' component will respond by rendering
          //  the full contents of the <details> component, and
          //  the 'SummaryDetails' component will respond too,
          //  changing its UI to reflect the expanded contents;
          //  this is the reason why the 'SummaryDetails' component
          //  is being cloned: so that it can always be rendered with
          //  the up to date 'isExpanded' state, rendering the appropriate
          //  UI based on this state.
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
