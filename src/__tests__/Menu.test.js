import { shallow } from "enzyme";

import Menu from "../components/Menu";

describe("Menu rendering", () => {
  it("renders a form", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find("#form")).toHaveLength(1);
  });

  it("renders correct amount of inputs", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find("input")).toHaveLength(4);
  });
});
