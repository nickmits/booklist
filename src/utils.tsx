import { IBook } from "./interfaces/books";

export const authors = (book: IBook) => {
  const bookAuthors = book.authors
    .map((b) => b.name.replace(",", ""))
    .join(", ");
  return bookAuthors;
};
