import { shallow } from "enzyme";

import NavFooter from "../components/NavFooter";

describe("NavFooter rendering", () => {
  it("renders an expand icon", () => {
    const wrapper = shallow(<NavFooter />);
    console.log(wrapper.debug());
    expect(wrapper.find("#burger")).toHaveLength(1);
  });
});
