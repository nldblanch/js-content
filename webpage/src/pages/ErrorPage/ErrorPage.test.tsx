import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router";
import ErrorPage from "./ErrorPage";
import routes from "@src/routes";

describe("ErrorPage", () => {
  // Because the 'ErrorPage' component uses
  // react-router (specifically the Link component),
  // to avoid context errors it is necessary to wrap the component in
  // a `MemoryRouter` component (alternatively a BrowserRouter) during testing.
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );

  test("renders the 404 heading and not found message", () => {
    renderComponent();

    expect(screen.getByText("404")).toBeDefined();
    expect(screen.getByText("Page Not Found")).toBeDefined();
    expect(
      screen.getByText(/the page you are looking for does not exist/i),
    ).toBeDefined();
  });

  test("renders the 'Back to Home' link with the correct destination", () => {
    renderComponent();

    const link = screen.getByRole("link", { name: /back to home/i });

    expect(link).toBeDefined();
    // Verifies the 'to' prop matches your routes configuration
    expect(link.getAttribute("href")).toBe(routes.HOME.path);
  });

  test("renders the arrow icon decoration", () => {
    renderComponent();

    const icon =
      screen.getByRole("presentation", { hidden: true }) ||
      screen.getByAltText("");
    expect(icon.getAttribute("src")).toContain("arrow.svg");
  });
});
