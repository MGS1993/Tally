import { shallow } from "enzyme";

import Home from "../Pages/Home";
import TallyDisplay from "../components/TallyDisplay";

describe("HomePage rendering", () => {
  let homeWrapper;
  beforeEach(() => {
    homeWrapper = shallow(<Home />);
  });
  it("renders a component showing what you owe or are owed", () => {
    expect(homeWrapper.find(TallyDisplay));
  });

  it("passes defined users to TallyDisplay", () => {
    const display = homeWrapper.find(TallyDisplay);

    expect(display.props().currentUser).toBeDefined();
    expect(display.props().otherUser).toBeDefined();
  });
});
