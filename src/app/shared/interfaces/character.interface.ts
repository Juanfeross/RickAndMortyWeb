export interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  origin: string;
  location: string;
  status: string;
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
