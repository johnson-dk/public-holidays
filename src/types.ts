export interface countryInterface {
  key: string;
  value: string;
}

export interface availableCountriesResponse {
  countriesData: countryInterface[];
}

export interface HolidayInterface {
  key: string;
  date: Date;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: [string] | null;
  launchYear: null;
  type: string | null;
}
