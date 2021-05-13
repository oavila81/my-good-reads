import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import WishListItem from './WishListItem';
import IBookInfoWishListItem from '../shared/interfaces/bookInfoWishList';

test('renders content', () => {
  const wishListItem: IBookInfoWishListItem = {
    id: "1",
    title: "this is a test"
  };

  const { getByText } = render(<WishListItem {...wishListItem} />);

  const titleElement = getByText(wishListItem.title);

  expect(titleElement).toBeInTheDocument();
});
