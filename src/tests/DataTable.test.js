import { render, fireEvent, screen } from "@testing-library/react";
import DataTable from "../components/DataTable";

describe("Tests for DataTable Componet", () => {
  it("Test for default render of headers", () => {
    render(<DataTable />);
    const TEST_TABLE_HEADERS_TEXT = {
      header1: "Domain",
      header2: "% of threats",
      header3: "# of threats",
    };

    expect(
      screen.getByText(TEST_TABLE_HEADERS_TEXT.header1)
    ).toBeInTheDocument();
    expect(
      screen.getByText(TEST_TABLE_HEADERS_TEXT.header2)
    ).toBeInTheDocument();
    expect(
      screen.getByText(TEST_TABLE_HEADERS_TEXT.header3)
    ).toBeInTheDocument();
  });

  it("Props Testing", () => {
    const TEST_TABLE_DATA = [
      { id: "test1", percentage: 34.5, count: 50 },
      { id: "test2", percentage: 83.67, count: 30 },
    ];
    render(<DataTable top5MaliciousWebsites={TEST_TABLE_DATA} />);
    TEST_TABLE_DATA.forEach((item) => {
      Object.keys(item).forEach((dataKey) => {
        expect(screen.getByText(item[dataKey])).toBeInTheDocument();
      });
    });
  });
});
