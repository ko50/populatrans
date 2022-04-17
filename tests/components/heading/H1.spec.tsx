import React from "react";
import renderer from "react-test-renderer";
import { H1 } from "components/heading/H1";

describe("common h1 component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<H1 text="テスト" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
