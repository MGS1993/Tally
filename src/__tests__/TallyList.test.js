import { shallow } from "enzyme";

import Home from "../Pages/Home";
import TallyList from "../components/TallyList";

describe("rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TallyList />);
  });

  it("renders to Home page", () => {
    const homeWrapper = shallow(<Home />);
    expect(homeWrapper.find(TallyList)).toHaveLength(1);
  });
});

// describe("functionality tests", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<TallyList />);
//   });

// });
