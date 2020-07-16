import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../redux/action/filter";
import { removeFromCard } from "../redux/action/card";

import {
  Input,
  Header,
  Button,
  Icon,
  Popup,
  List,
  Image,
} from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

export default function Head() {
  const dispatch = useDispatch();
  const { query, totalPrice, cardBooks } = useSelector(({ filter, card }) => {
    return {
      query: filter.searchQuery,
      totalPrice: card.items.reduce((total, book) => total + book.price, 0),
      cardBooks: card.items,
    };
  });
  function removeFromCart(id) {
    dispatch(removeFromCard(id));
  }
  return (
    <div className="header">
      <div className="header__logo">
        <Header
          as="h2"
          image={<Icon name="book" />}
          content="Letter"
          color="blue"
          size="huge"
        />
      </div>

      <Input
        action={{
          content: "Найти",
          color: "blue",
        }}
        placeholder="Поиск..."
        className="header__search"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
      <Popup
        on={["click"]}
        trigger={
          <Button
            color="blue"
            content={`Корзина(${cardBooks.length})`}
            icon={<Icon name="cart" />}
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: `${totalPrice} руб`,
            }}
          />
        }
        content={
          cardBooks && cardBooks.map((book) => <CartComponent {...book} removeFromCart={removeFromCart}/>)
        }
      />
    </div>
  );
}
