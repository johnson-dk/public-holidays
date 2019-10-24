import React from "react";
import { shallow } from "enzyme";
import AvailableCountries from "./AvailableCountries";

it("renders without crashing", () => {
  shallow(<AvailableCountries/>);
});
