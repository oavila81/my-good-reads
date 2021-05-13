import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import BookCard from './BookCard';
import IBookInfo from '../shared/interfaces/bookInfo';

test('renders content', () => {
  const bookCard: IBookInfo = {
    id: "1",
    title: "this is a test",
    description: "this is a description test",
    authors:  ["person1", "person2"],
    publicatedBy: "person3"
  };

  const { getByText } = render(<BookCard {...bookCard} />);

  const titleElement = getByText(bookCard.title);
  const descriptionElement = getByText(bookCard.description);
  const authorsElement = getByText(`by ${bookCard.authors?.join(", ")}`);
  const publicatedByElement = getByText(`Publicated by ${bookCard.publicatedBy}`);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(authorsElement).toBeInTheDocument();
  expect(publicatedByElement).toBeInTheDocument();
});
