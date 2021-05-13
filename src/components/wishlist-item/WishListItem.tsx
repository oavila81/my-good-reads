import React, { useContext } from "react";
import IBookInfoWishListItem from "../shared/interfaces/bookInfoWishList";
import { BookContext } from "../shared/Contexts/BookContext";
import "./WishListItem.css";

const WishListItem = (bookInfo: IBookInfoWishListItem) => {
  const { wishListFunc } = useContext(BookContext);

  return (
    <li>
      <div className="wishlist-item">
        <div className="book-image">
          <img src={bookInfo.imageSrc} alt="Book" />
        </div>
        <div className="book-title">
          <h2>{bookInfo.title}</h2>
        </div>
        <button
          className="btn-remove"
          onClick={(e) => {
            e.preventDefault();
            wishListFunc({ type: "removeToWishList", id: bookInfo.id });
          }}
        ></button>
      </div>
    </li>
  );
};

export default WishListItem;
