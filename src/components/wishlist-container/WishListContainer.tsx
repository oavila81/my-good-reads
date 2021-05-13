import React, { useContext } from "react";
import WishListItem from "../wishlist-item/WishListItem";
import { BookContext } from "../shared/Contexts/BookContext";
import "./WishListContainer.css";

const WishListContainer = () => {
  const { wishList } = useContext(BookContext);

  return (
    <>
      <input
        type="checkbox"
        id="wishlist-btn"
        className="wishlist-btn visuallyHidden"
      />
      <aside className="wishlist--container">
        <h1>Wishlist</h1>
        <ul>
          {!!wishList && wishList.map((item, index) => <WishListItem key={`wli-${index}`} {...item} />)}
        </ul>
      </aside>
    </>
  );
};

export default WishListContainer;
