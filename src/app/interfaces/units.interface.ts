export interface IUnitsResponse {
  current_country_id?: number;
  locations?: ILocation[];
  wpTotal?: number;
  total?: number;
  success?: boolean;
}

export interface ILocation {
  id?: number;
  title?: string;
  content?: string;
  opened?: boolean;
  mask?: string;
  towel?: string;
  fountain?: string;
  lockerRoom?: string;
  schedules?: ISchedule[];
  street?: string;
  region?: string;
  cityName?: string;
  stateName?: string;
  uf?: string;
}

export interface ISchedule {
  weekdays?: string;
  hour?: string;
}
