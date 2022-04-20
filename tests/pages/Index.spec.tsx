import React from "react";
import renderer from "react-test-renderer";
import Index from "pages/index";

describe("common home page", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Index prefList={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
