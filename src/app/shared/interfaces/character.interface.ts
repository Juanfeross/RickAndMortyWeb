export interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  origin: ILocation;
  location: ILocation;
  status: string;
  type: string;
  url: string;
  episode: [];
}

export interface IPagination {
  count: number;
  next: string;
  pages: number;
  prev?: string;
}

export interface IResultCharacter {
  info: IPagination;
  results: ICharacter[];
}

export interface ILocation {
  name: string;
  url: string;
}
