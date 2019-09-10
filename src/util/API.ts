import axios from "axios";

const create = axios.create({
  baseURL: "https://date.nager.at/api/v2",
  responseType: "json"
});

export const getAvailableCountries = async function(): Promise<any>{
  const response = await create("/AvailableCountries");
  return response.data;
}

export const getCountryHolidays = async function(year: number, countryCode: string): Promise<any>{
  const response = await create(`/PublicHolidays/${year}/${countryCode}`);
  return response.data;
}

