import React from "react";
import { shallow } from "enzyme";
import Donate from "./Donate";

describe("Donate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Donate />);
    expect(wrapper).toMatchSnapshot();
  });
});
