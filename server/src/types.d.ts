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
  premiered?: string;
  ended?: string;
  officialSite?: string;
  schedule?: Schedule;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: WebChannel;
  dvdCountry?: string;
  externals?: ExternalIds;
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
  airdate?: string;
  airtime?: string;
  airstamp?: string;
  runtime?: number;
  rating?: Rating;
  image?: ImageLinks;
  summary?: string;
  _links?: Links;
}

export interface WebChannel {
  id: number;
  name: string;
  country: string;
  officialSite: string;
}

export interface Links {
  self?: string;
  previousepisode?: string;
  nextepisode?: string;
}

export interface ExternalIds {
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

export interface LinksArgs {
  self: { href: string };
  previousepisode: { href: string };
  nextepisode: { href: string };
}
