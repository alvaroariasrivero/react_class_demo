import React from "react";
import { shallow } from "enzyme";
import PokemonsApi from "./PokemonsApi";

describe("PokemonsApi", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonsApi />);
    expect(wrapper).toMatchSnapshot();
  });
});
