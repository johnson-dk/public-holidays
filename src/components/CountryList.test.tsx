import React from "react";
import { shallow } from "enzyme";
import CountryList from "./CountryList";

const listOfCountries:CountryListInterface = [
  { key: "AD", value: "Andorra" },
  { key: "AR", value: "Argentina" },
  { key: "AT", value: "Austria" }
];

it("renders without crashing", () => {
  shallow(<CountryList listOfCountries={listOfCountries}/>);
});
