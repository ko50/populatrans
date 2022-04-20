import React from "react";
import renderer from "react-test-renderer";
import Index from "pages/index";
import { getMockedPrefectureList } from "api/mock/prefList";
import { getMockedPopulationTransition } from "api/mock/transition";

describe("common home page", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Index
          prefList={[]}
          api={{
            prefListAPI: getMockedPrefectureList,
            populationTransitionAPI: getMockedPopulationTransition,
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
