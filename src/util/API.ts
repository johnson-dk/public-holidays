import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.responseType = "json";

export const getAvailableCountries = async function(): Promise<any>{
  const response = await axios.get("/AvailableCountries");
  return response.data;
}

export const getCountryHolidaysForYear = async function(year: number, countryCode: string): Promise<any>{
  const response = await axios.get(`/PublicHolidays/${year}/${countryCode}`);
  return response.data;
}

