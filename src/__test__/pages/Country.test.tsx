import React from "react";
import { shallow } from "enzyme";
import Country from "../../pages/Country";

it("renders without crashing", () => {
  shallow(<Country 
    match={{params: {id: "AD"}, isExact: true, path: "", url: ""}}
  />);
});
