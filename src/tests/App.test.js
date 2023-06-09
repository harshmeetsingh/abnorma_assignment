import React from "react";
import App from "../App";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

it("Take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
