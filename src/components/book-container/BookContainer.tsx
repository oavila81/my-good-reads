import React, { useState, useEffect } from "react";
import "./BookContainer.css";
import BookSearch from "./../book-search/BookSearch";
import BookCard from "../book-card/BookCard";
import { getBooksByType } from "../../services/book-search.service";

type BookResultType = {
  id: string;
  volumeInfo: {
    imageLinks?: { thumbnail?: string };
    title: string;
    authors: string[];
    description: string;
    publisher: string;
    publishedDate: Date;
  };
};

const BookContainer = () => {
  const [bookTypeToSearch, setBookTypeToSearch] = useState<string>("");
  const [allAvailableBooks, setAllAvailableBooks] = useState<any>({});

  useEffect(() => {
    async function requestBooks() {
      if (bookTypeToSearch) {
        const allBooks = await getBooksByType(bookTypeToSearch);
        setAllAvailableBooks(allBooks);
      }
    }

    async function getAllBooks() {
      await requestBooks();
    }

    const timeOutId = setTimeout(() => getAllBooks(), 500);
    return () => clearTimeout(timeOutId);
  }, [bookTypeToSearch]);

  return (
    <div className="book--container">
      <BookSearch {...{ bookTypeToSearch, setBookTypeToSearch }} />
      <div className="books">
        {!!allAvailableBooks.items &&
          allAvailableBooks.items.map((book: BookResultType) => (
            <BookCard
              key={`bc-${book.id}`}
              {...{
                id: book.id,
                imageSrc: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                publicatedBy: book.volumeInfo.publisher,
                publicated: book.volumeInfo.publishedDate,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default BookContainer;
