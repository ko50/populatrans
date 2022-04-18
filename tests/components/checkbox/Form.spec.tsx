import React from "react";
import renderer from "react-test-renderer";
import { CheckboxForm } from "components/checkbox/Form";

describe("checkbox form component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<CheckboxForm label="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const tree = renderer
      .create(<CheckboxForm label="test" id="test" value={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
