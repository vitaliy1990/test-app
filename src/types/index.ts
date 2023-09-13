export interface CharactersResponse {
  info: PageInfo;
  results: Array<Character>;
}

export enum SelectName {
  character = 'character',
  location = 'location',
  episodes = 'episodes',
}

export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatusTypes;
  species: string;
  type: string;
  gender: CharacterGenderTypes;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
  firstEpisodeName?: string;
}

export type CharacterStatusTypes = 'Alive' | 'Dead' | 'unknown';
export type CharacterGenderTypes = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface EpisodesResponse {
  info: PageInfo;
  results: Array<Episode>;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export type ServerError = { message: string; status: number };
