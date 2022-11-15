import React from "react";
import { shallow } from "enzyme";
import Img from "./Img";

describe("Img", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Img />);
    expect(wrapper).toMatchSnapshot();
  });
});
