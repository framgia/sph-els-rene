/* eslint-disable react-hooks/exhaustive-deps */
import { render, screen, cleanup } from "@testing-library/react";
import Button from "../../../shared/components/Button/Button";
import { SOLID_GREEN } from "../../../shared/components/Button/buttonType";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Button Component", () => {
  render(<Button type={SOLID_GREEN} text="Testing Button" />);

  const button = screen.getByTestId("button");

  // test button rendering
  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  // test text display in button
  test("Button Text display", () => {
    expect(button).toHaveTextContent("Testing Button");
  });
});
