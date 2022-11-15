import React from "react";
import { shallow } from "enzyme";
import ReviewsJ from "./Reviews";

describe("ReviewsJ", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReviewsJ />);
    expect(wrapper).toMatchSnapshot();
  });
});
