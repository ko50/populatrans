import React from "react";
import renderer from "react-test-renderer";
import { PrefForm } from "components/checkbox/PrefForm";

describe("prefecture form component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<PrefForm prefList={[]} onSelect={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with data", () => {
    const tree = renderer
      .create(
        <PrefForm
          prefList={[
            { code: 1, name: "茨城県" },
            { code: 2, name: "埼玉県" },
          ]}
          onSelect={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
