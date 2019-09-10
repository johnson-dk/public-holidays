import axios from "axios";
import { availableCountriesResponse } from "./../types"

const create = axios.create({
  baseURL: "https://date.nager.at/api/v2",
  responseType: "json"
});

export const getAvailableCountries = async function(): Promise<availableCountriesResponse>{
  const response = await create("/AvailableCountries");
  return response.data;
}

export const getCountryHolidays = async function(year: number, countryCode: string): Promise<any>{
  console.log("hello");
  const response = await create(`/PublicHolidays/${year}/${countryCode}`);
  return response.data;
}

