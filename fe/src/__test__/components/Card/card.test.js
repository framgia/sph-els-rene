import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Card from "../../../shared/components/Card/Card";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Card Component", () => {
  render(
    <Card title="Card Title" subtitle="Card Subitle" children="Content" />
  );

  // test text display in button
  test("card props to accept text", () => {
    const card = screen.getByTestId("card-test-id");
    expect(card).toHaveTextContent("Card Title");
    expect(card).toHaveTextContent("Card Subitle");
    expect(card).toHaveTextContent("Content");
  });
});
