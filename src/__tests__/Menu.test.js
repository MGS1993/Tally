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

  /* WIP; useform hook causing complications in testing */

  // it("clears inputs once submit btn has been clicked", () => {
  //   const inputWrapper = wrapper.find("title-input");
  //   const submitBtn = wrapper.find("#submitBtn");

  //   inputWrapper.props().value = "foo";
  //   console.log(inputWrapper.value);

  //   expect(submitBtn).toHaveLength(1);
  //   submitBtn.simulate("click");
  // });
});
