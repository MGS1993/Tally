import { shallow } from "enzyme";

import Menu from "../components/Menu";

describe("Menu rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu />);
  });

  it("renders a form", () => {
    expect(wrapper.find("#form")).toHaveLength(1);
  });

  it("renders correct amount of inputs", () => {
    expect(wrapper.find("input")).toHaveLength(4);
  });
  it("renders a text field", () => {
    expect(wrapper.find("textarea")).toHaveLength(1);
  });
});
