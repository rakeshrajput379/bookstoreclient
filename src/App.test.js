import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";

describe("App Component", () => {
  it("should render app with error", () => {
    const { asFragment } = render(<Provider></Provider>);

    expect(asFragment()).toMatchSnapshot();
  });
});
