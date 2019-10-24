import { getAvailableCountries, getCountryHolidaysForYear } from "./API";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const listOfCountries = [
  { key: "AD", value: "Andorra" },
  { key: "AR", value: "Argentina" },
  { key: "AT", value: "Austria" }
];

const listOfHolidays = [
  {
    counties: null,
    countryCode: "AD",
    date: "2019-01-01",
    fixed: true,
    global: true,
    launchYear: null,
    localName: "Any nou",
    name: "New Year's Day",
    type: "Public"
  },
  {
    counties: null,
    countryCode: "AD",
    date: "2019-03-14",
    fixed: true,
    global: true,
    launchYear: null,
    localName: "Dia de la Constitució",
    name: "Constitution Day",
    type: "Public"
  }
];

describe("test api", () => {
  describe("getAvailableCountries endpoint", () => {
    it("returns a json of countries", async () => {
      mockedAxios.get.mockResolvedValue({
        data: listOfCountries,
        config: { some: "congig" },
        status: 200,
        statusText: "OK"
      });
      const data = await getAvailableCountries();
      expect(data).toEqual(listOfCountries);
    });
  });
  describe("getCountryHolidaysForYear endpoint", () => {
    it("returns a json of holidays", async () => {
      mockedAxios.get.mockResolvedValue({
        data: listOfHolidays,
        config: { some: "congig" },
        status: 200,
        statusText: "OK"
      });
      const data = await getCountryHolidaysForYear(2012, "AD");
      expect(data).toEqual(listOfHolidays);
    });
  });
});
