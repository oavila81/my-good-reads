import React, { createContext, useReducer } from "react";
import IBookInfoWishListItem from "../interfaces/bookInfoWishList";

type Action =
  | { type: "addToWishList"; book: IBookInfoWishListItem }
  | { type: "removeToWishList"; id: string };

const bookData: IBookInfoWishListItem[] = [];

const BookContext = createContext<{
  wishList: IBookInfoWishListItem[];
  wishListFunc: React.Dispatch<any>;
}>({
  wishList: bookData,
  wishListFunc: () => null,
});

const bookReducer = (
  state: IBookInfoWishListItem[],
  action: Action
): IBookInfoWishListItem[] => {
  switch (action.type) {
    case "addToWishList": {
      return state.some((book) => book.id === action.book.id)
        ? state
        : [...state, action.book];
    }
    case "removeToWishList": {
      return state.filter((book) => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

const BookContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, bookData);
  return (
    <BookContext.Provider
      value={{
        wishList: state,
        wishListFunc: dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookContextProvider, BookContext };
