import React from "react";
import { shallow } from "enzyme";
import {CountryInterface} from "../../types";
import CountryList from "../../components/CountryList";

const listOfCountries:CountryInterface[] = [
  { key: "AD", value: "Andorra" },
  { key: "AR", value: "Argentina" },
  { key: "AT", value: "Austria" }
];

it("renders without crashing", () => {
  shallow(<CountryList listOfCountries={listOfCountries}/>);
});
