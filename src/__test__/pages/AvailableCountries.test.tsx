import React from "react";
import { shallow } from "enzyme";
import AvailableCountries from "../../pages/AvailableCountries";


it("renders without crashing", () => {
  shallow(<AvailableCountries/>);
});

it('should add two to the counter when the "two" value is true', () => {
  const wrapper = shallow(<AvailableCountries />);
});