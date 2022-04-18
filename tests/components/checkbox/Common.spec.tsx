import React from "react";
import renderer from "react-test-renderer";
import { Checkbox } from "components/checkbox/Common";

describe("common checkbox component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const tree = renderer.create(<Checkbox id="test" value={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
