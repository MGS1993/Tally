import { shallow } from "enzyme";

import Home from "../Pages/Home";
import TallyList from "../components/TallyList";

describe("rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TallyList />);
  });

  it("renders to Home page", () => {
    //data is test to simulate second render which will always have props
    const homeWrapper = shallow(<Home data={"test"} />);
    expect(homeWrapper.find(TallyList)).toHaveLength(1);
  });
});

// describe("functionality tests", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<TallyList />);
//   });

// });
