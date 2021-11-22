import { shallow } from "enzyme";

import Home from "../Pages/Home";
import TallyExpense from "../components/TallyExpense";

describe("rendering tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TallyExpense />);
  });
  it("renders to home screen", () => {
    const homeWrapper = shallow(<Home />);

    expect(homeWrapper.find(TallyExpense)).toHaveLength(1);
  });
});
