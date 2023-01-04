import { render, screen, cleanup } from "@testing-library/react";
import LoadingPlainText from "../../../shared/components/Spinner/LoadingPlainText";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Loading Spinner Component", () => {
  // test text display in button
  test("Render Default Loaiding Spinner Text", () => {
    render(<LoadingPlainText />);

    const spinner = screen.getByTestId("spinner-test-id");
    expect(spinner).toHaveTextContent("Loading Item . . .");
  });

  test("Render Given Loaiding Spinner Text", () => {
    render(<LoadingPlainText text="Sample Loading Spinner" />);

    const spinner = screen.getByTestId("spinner-test-id");
    expect(spinner).toHaveTextContent("Sample Loading Spinner");
  });
});
