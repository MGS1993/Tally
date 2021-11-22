import { shallow } from "enzyme";

import TallyDisplay from "../components/TallyDisplay";

describe("TallyDisplay rendering", () => {
  const data = {
    calculatedUserExpenses: 200,
    calculatedOtherUserExpenses: 0,
  };

  it("renders difference of user expense data with other user ", () => {
    const wrapper = shallow(<TallyDisplay data={data} />);
    const stringDifference = () => {
      let difference =
        data.calculatedUserExpenses - data.calculatedOtherUserExpenses;
      return difference.toString();
    };

    expect(wrapper.find("#difference").text()).toBe(stringDifference());
  });
});
