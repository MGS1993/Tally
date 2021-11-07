import { shallow } from "enzyme";

import TallyDisplay from "../components/TallyDisplay";

describe("TallyDisplay rendering", () => {
  const users = {
    currentUser: { name: "Manuel", paidFor: 300 },
    otherUser: { name: "Victoria", paidFor: 172 },
  };

  it("renders difference of user expense data with other user ", () => {
    const wrapper = shallow(
      <TallyDisplay
        currentUser={users.currentUser}
        otherUser={users.otherUser}
      />
    );
    const stringDifference = () => {
      let difference = users.currentUser.paidFor - users.otherUser.paidFor;
      return difference.toString();
    };
    expect(wrapper.find("#difference").text()).toBe(stringDifference());
  });
});
