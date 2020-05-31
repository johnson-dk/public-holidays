export interface CountryInterface {
  key: string;
  value: string;
}

export interface HolidayInterface {
  key: number;
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: [string] | null;
  launchYear: null;
  type: string | null;
}
