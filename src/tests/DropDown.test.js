import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import DropDown from "../components/DropDown";

describe("Tests for DropDown component", () => {
  it("Render test with no props", () => {
    render(<DropDown />);
  });

  it("Click test with empty list", () => {
    render(<DropDown dropDownList={[]} />);
    const element = screen.getByRole("button");
    fireEvent.click(element);
    const listElement = screen.queryByRole("list", { class: "drop-down-list" });
    expect(listElement).not.toBeInTheDocument();
  });
  it("Click test with non-empty list", () => {
    const TEST_LIST_ITEMS = [{ id: "my-id", name: "my-name" }];
    render(<DropDown dropDownList={TEST_LIST_ITEMS} />);
    const element = screen.getByRole("button");
    fireEvent.click(element);
    const listElement = screen.getByRole("list", { class: "drop-down-list" });
    expect(listElement).toBeInTheDocument();
  });
});
