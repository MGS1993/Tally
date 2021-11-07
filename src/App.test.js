import { shallow } from "enzyme";
import App from "./App";
import ReactRouter from "./ReactRoutes";

describe("App rendering", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders router", () => {
    expect(wrapper.find(ReactRouter));
  });
});
