import React from "react";
import Header from "./../components/header/Header";
import BookContainer from "../components/book-container/BookContainer";
import WishListContainer from "../components/wishlist-container/WishListContainer";
import { BookContextProvider } from "../components/shared/Contexts/BookContext";

const Books = () => {
  return (
    <BookContextProvider>
      <Header />
      <main>
        <BookContainer />
        <WishListContainer />
      </main>
    </BookContextProvider>
  );
};

export default Books;
