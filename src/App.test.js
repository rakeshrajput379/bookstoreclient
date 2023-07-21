import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render app with error", () => {
    const { asFragment } = render(<App></App>);

    expect(asFragment()).toMatchSnapshot();
  });
});
