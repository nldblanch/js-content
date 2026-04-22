import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";
import { vi } from "vitest";

describe("Modal Component", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    title: "Test Modal",
  };

  it("renders title and children when open", () => {
    render(
      <Modal {...defaultProps}>
        <div data-testid="modal-content">Hello World</div>
      </Modal>,
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal {...defaultProps} isOpen={false}>
        <div>Hidden</div>
      </Modal>,
    );
    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(<Modal {...defaultProps}>Content</Modal>);
    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the Escape key is pressed", () => {
    render(<Modal {...defaultProps}>Content</Modal>);
    fireEvent.keyDown(window, { key: "Escape" });
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
