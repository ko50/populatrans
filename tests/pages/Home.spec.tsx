import React from "react";
import renderer from "react-test-renderer";
import Home from "pages/index";

describe("common home page", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
