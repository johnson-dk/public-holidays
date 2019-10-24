import React from "react";
import { shallow } from "enzyme";
import HolidayDetails from "./HolidayDetails";

const holiday = {
  key: 1,
  counties: null,
  countryCode: "AD",
  date: "2019-03-14",
  fixed: true,
  global: true,
  launchYear: null,
  localName: "Dia de la Constitució",
  name: "Constitution Day",
  type: "Public"
};

it("renders without crashing", () => {
  shallow(<HolidayDetails  holiday={holiday} key={holiday.key}/>);
});
