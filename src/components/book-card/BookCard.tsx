import React, { useContext } from "react";
import IBookInfo from "./../shared/interfaces/bookInfo";
import { BookContext } from "../shared/Contexts/BookContext";
import "./BookCard.css";

const BookCard = (bookInfo: IBookInfo) => {
  const { wishListFunc } = useContext(BookContext);

  return (
    <article className="book">
      <div className="book-image">
        <img src={bookInfo.imageSrc} alt="Book" />
      </div>
      <div className="book-info">
        <h2>{bookInfo.title.length > 20 ? `${bookInfo.title.substring(0, 20)}...` : bookInfo.title}</h2>
        <span className="author">
          by {!!bookInfo.authors && bookInfo.authors.join(", ")}
        </span>
        <p>{!bookInfo.description ? 'Sorry, description doesn\'t available...' : bookInfo.description.length > 130 ? `${bookInfo.description?.substring(0, 130)}...` : bookInfo.description}</p>
        <div className="btn-wishlist">
          <button
            onClick={(e) => {
              e.preventDefault();
              wishListFunc({ type: "addToWishList", book: bookInfo });
            }}
          >
            <span>Add to wishlist</span>
          </button>
        </div>
      </div>
      <div className="footer">
        <span className="publicated">
          Publicated by {bookInfo.publicatedBy} {bookInfo.publicated && `(${bookInfo.publicated})`}
        </span>
      </div>
    </article>
  );
};

export default BookCard;
