import axios from "axios";

axios.defaults.baseURL = 'https://date.nager.at/api/v2';
axios.defaults.responseType = "json";

export const getAvailableCountries = async function(): Promise<any>{
  const response = await axios.get("/AvailableCountries");
  return response.data;
}

export const getCountryHolidays = async function(countryCode: string): Promise<any>{
  const response = await axios.get(`/NextPublicHolidays/${countryCode}`);
  return response.data;
}

export const getCountryHolidaysForYear = async function(year: number, countryCode: string): Promise<any>{
  const response = await axios.get(`/PublicHolidays/${year}/${countryCode}`);
  return response.data;
}

