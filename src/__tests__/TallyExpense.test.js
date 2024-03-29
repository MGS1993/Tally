import { shallow } from "enzyme";

import TallyExpense from "../components/TallyExpense";

describe("rendering tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TallyExpense date={"2021-11-27"} />);
  });
  // it("renders to home screen", () => {
  //   const homeWrapper = shallow(<Home />);
  //   expect(homeWrapper.find(TallyExpense)).toHaveLength(1);
  // });

  it("has four child divs", () => {
    expect(wrapper.find(".mainWrapper").children()).toHaveLength(4);
  });

  it("renders two divs in the first two children", () => {
    expect(wrapper.find(".mainWrapper").childAt(0).children()).toHaveLength(2);
    expect(wrapper.find(".mainWrapper").childAt(1).children()).toHaveLength(2);
  });

  it("has a date and icon in the first and second first nested div", () => {
    const wrapper = shallow(<TallyExpense date={"2021-11-27"} />);
    expect(wrapper.find(".topWrapper").childAt(0).text().length).not.toEqual(0);
    expect(wrapper.find(".topWrapper").childAt(1)).toHaveLength(1);
  });

  it('renders "No Title" if no title was given', () => {
    const noTitleWrapper = shallow(
      <TallyExpense title="" date={"2021-11-27"} />
    );
    expect(noTitleWrapper.find(".title").text()).toEqual("No Title");
  });

  it("renders cost in second child", () => {
    expect(
      wrapper.find(".midWrapper").childAt(1).text().length
    ).not.toBeLessThan(1);
  });
});

// describe("tallyExpense functionality", () => {
//   let wrapper;
//   const mockCallBack = jest.fn();

//   beforeEach(() => {
//     wrapper = shallow(<TallyExpense />);
//   });

//   it("runs a function whenever button is clicked", () => {
//     const button = wrapper.find(".iconWrapper");
//     wrapper.setProps({ onClick: mockCallBack });
//     button.simulate("click");

//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });
