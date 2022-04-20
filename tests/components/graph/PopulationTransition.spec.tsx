import React from "react";
import renderer from "react-test-renderer";
import { PopulationTransitionGraph } from "components/graph/PopulationTransition";

describe("population transition graph component", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <PopulationTransitionGraph
          transitionList={{ boundaryYear: 2021, transitions: [] }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with actual data", () => {
    const tree = renderer
      .create(
        <PopulationTransitionGraph
          transitionList={{
            boundaryYear: 2021,
            transitions: [
              {
                pref: "茨城県",
                populations: [
                  {
                    year: 2014,
                    value: 200,
                  },
                  {
                    year: 2015,
                    value: 200,
                  },
                  {
                    year: 2016,
                    value: 1600,
                  },
                  {
                    year: 2017,
                    value: 0,
                  },
                  {
                    year: 2018,
                    value: 500,
                  },
                  {
                    year: 2019,
                    value: 4500,
                  },
                  {
                    year: 2020,
                    value: 6000,
                  },
                  {
                    year: 2021,
                    value: 2000,
                  },
                ],
              },
            ],
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
