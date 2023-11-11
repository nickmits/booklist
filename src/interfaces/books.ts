export interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  download_count: number;
  bookshelves: string[];
  subjects: string[];
}
export interface IAuthor {
  name: string;
  birth_year: number;
  death_year: number;
}

export interface IBooks {
  books: IBook[];
}
