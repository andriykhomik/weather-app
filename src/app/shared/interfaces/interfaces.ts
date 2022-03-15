export interface Language {
  isActive: boolean;
  language: string;
}

export interface ResponseData {
  body: WeatherBody;
  status: number;
}

export interface WeatherBody {
  current: WeatherCurrent;
  location: WeatherInfo;
}

export interface WeatherInfo {
  country: string;
  localtime: string;
  name: string;
  region?: string;
}

export interface WeatherCurrent {
  cloud?: 100;
  condition?: WeatherCondition;
  feelslike_c?: number;
  feelslike_f?: number;
  gust_kph?: number;
  gust_mph?: number;
  humidity?: number;
  last_updated?: string;
  last_updated_epoch?: 1646267400;
  precip_in?: number;
  precip_mm?: number;
  pressure_in?: number;
  pressure_mb?: number;
  temp_c?: number;
  temp_f?: number;
  uv?: number;
  vis_km?: number;
  vis_miles?: number;
  wind_degree?: number;
  wind_dir?: string;
  wind_kph?: number;
  wind_mph?: number;
}

export interface WeatherCondition {
  icon: string;
  text: string;
}

export interface WeatherData {
  city: string;
  country: string;
  cloud?: number;
  icon?: string;
  time: Date;
  alt?: string;
  temperatureC?: number;
  windDirection?: string;
  speedWind?: number;
  status?: number;
  precip_mm?: number;
  humidity?: number;
  pressure?: number;
  dayForecast?: object[];
  averageWeatherData?: object;
}

export interface AutocompleteRes {
  name: string;
  country: string;
  url: string;
}

export interface Favorite {
  city: string;
  country: string;
}

export interface DayForecast {
  current: WeatherData;
  forecast: WeatherData[];
}
