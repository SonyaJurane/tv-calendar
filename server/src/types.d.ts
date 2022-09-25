export interface Show {
  id: number;
  url: string;
  name: string;
  type?: string;
  language?: string;
  genres?: string[];
  status?: string;
  runtime?: number;
  averageRuntime?: number;
  premiered?: Date;
  ended?: Date;
  officialSite?: string;
  schedule?: Schedule;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: string;
  dvdCountry?: string;
  externals?: Externals;
  image?: ImageLinks;
  summary?: string;
  updated?: number;
  _links?: Links;
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season?: number;
  number?: number;
  type?: string;
  airdate?: Date;
  airtime?: string;
  airstamp?: Date;
  runtime?: number;
  rating?: Rating;
  image?: ImageLinks;
  summary?: string;
  _links?: Links;
}

export interface Links {
  self?: Link;
  previousepisode?: Link;
  nextepisode?: Link;
}

export interface Link {
  href?: string;
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

export interface ImageLinks {
  medium?: string;
  original?: string;
}

export interface Network {
  id?: number;
  name?: string;
  country?: Country;
  officialSite?: string;
}

export interface Country {
  name?: string;
  code?: string;
  timezone?: string;
}

export interface Rating {
  average?: number;
}

export interface Schedule {
  time?: string;
  days?: string[];
}
