import { render, fireEvent, screen } from "@testing-library/react";
import DataCard from "../components/DataCard";

describe("Tests for DataCard Componet", () => {
  it("Render Test", () => {
    render(<DataCard />);
  });

  it("Data Value Test for props", () => {
    const TEST_LABEL_TEXT = "Test Label";
    render(<DataCard labelText={TEST_LABEL_TEXT} value={45} />);
    expect(screen.getByText(45)).toBeInTheDocument();
    expect(
      screen.getByText((_, element) => element.textContent === TEST_LABEL_TEXT)
    ).toBeInTheDocument();
  });

  it("Test for styling using fontColor prop", () => {
    const TEST_FONT_COLOR = "rgb(212, 212, 212)";
    render(<DataCard fontColor={TEST_FONT_COLOR} value={45} />);
    const element = screen.getByText(45);
    const computedStyle = window.getComputedStyle(element);
    expect(computedStyle.color).toBe(TEST_FONT_COLOR);
  });

  it("Test to display when no props are passed", () => {
    const TEST_DEFAULT_TEXT = "-";
    render(<DataCard />);
    expect(screen.getByText(TEST_DEFAULT_TEXT)).toBeInTheDocument();
  });
});
