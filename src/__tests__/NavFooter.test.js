import { shallow, mount } from "enzyme";

import Menu from "../components/Menu";
import NavFooter from "../components/NavFooter";
import ReactRoutes from "../ReactRoutes";

describe("NavFooter rendering", () => {
  it("renders an expand icon", () => {
    const wrapper = shallow(<NavFooter />);
    expect(wrapper.find("#burger")).toHaveLength(1);
  });

  it("opens a nav menu when burger icon is clicked", () => {
    const routeWrap = mount(<ReactRoutes />);
    const toggleBtn = routeWrap.find(NavFooter);

    expect(toggleBtn).toHaveLength(1);
    toggleBtn.simulate("click");
    expect(routeWrap.find(Menu)).toHaveLength(1);
  });
});
