import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import { describe, expect, it } from 'vitest';

describe('Modal Component', () => {
  it('opens the matching window from a trigger', () => {
    render(
      <Modal>
        <Modal.Trigger opens="test-modal">Open modal</Modal.Trigger>
        <Modal.Window id="test-modal" title="Test Modal">
          <div data-testid="modal-content">Hello World</div>
        </Modal.Window>
      </Modal>,
    );

    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }));

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('closes the window from the close button and Escape key', () => {
    render(
      <Modal>
        <Modal.Trigger opens="test-modal">Open modal</Modal.Trigger>
        <Modal.Window id="test-modal" title="Test Modal">
          Content
        </Modal.Window>
      </Modal>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }));

    fireEvent.click(screen.getByRole('button', { name: '×' }));
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }));
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });
});
