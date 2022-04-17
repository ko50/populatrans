import React from "react";
import renderer from "react-test-renderer";
import { Header } from "components/header/Common";

describe("common header component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
