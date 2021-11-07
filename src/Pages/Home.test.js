import { shallow } from "enzyme";

import Home from "./Home";
import TallyDisplay from "../components/TallyDisplay";

describe("HomePage rendering", () => {
  let homeWrapper;
  beforeEach(() => {
    homeWrapper = shallow(<Home />);
  });
  it("renders a component showing what you owe or are owed", () => {
    expect(homeWrapper.find(TallyDisplay));
  });

  it("has defined users", () => {
    const display = homeWrapper.find(TallyDisplay);

    expect(display.props().currentUser).toBeDefined();
    expect(display.props().otherUser).toBeDefined();
  });
});
