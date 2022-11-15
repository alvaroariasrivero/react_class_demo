import React from "react";
import { shallow } from "enzyme";
import Pokeuser from "./Pokeuser";

describe("Pokeuser", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokeuser />);
    expect(wrapper).toMatchSnapshot();
  });
});
