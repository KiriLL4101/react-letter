import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCard } from '../redux/action/card'

import { Card, Image, Button } from "semantic-ui-react";

export default function BookCard(book) {
  const { title, author, image, price, id } = book;
  const dispatch = useDispatch();
  const { countBook } = useSelector(({ card }) => {
    return {
      countBook: card.items.reduce(
        (count, book) => count + (book.id === id ? 1 : 0),
        0
      ),
    };
  });
  return (
    <Card color="blue">
      <Image src={image} className="card__img" as="img" />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
        <Card.Description>{price} руб.</Card.Description>
      </Card.Content>
      <Button as="button" color="blue" onClick={() => dispatch(addToCard(book))}>
        Добавить в корзину{ countBook ? `(${countBook})` : null}
      </Button>
    </Card>
  );
}
