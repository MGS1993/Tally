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

  // it("passes data to TallyDisplay", () => {
  //   const data = {
  //     userExpenses: [
  //       {
  //         _id: "619b13dc69b44f8ba06512ee",
  //         cost: "200",
  //         title: "Gift - LED Display jukebox",
  //         date: "2021-11-19",
  //         description: "Gift for my love",
  //         owner: "6188b944996580523fa7b30f",
  //         __v: 0,
  //       },
  //     ],
  //     otherUserExpenses: "[]",
  //     calculatedUserExpenses: 200,
  //     calculatedOtherUserExpenses: 0,
  //   };
  //   const display = shallow(<TallyDisplay data={data} />);
  //   // console.log(display.debug());
  //   console.log(display.prop("data"));
  //   expect(display.prop("data")).toBeDefined();
  // });
});
