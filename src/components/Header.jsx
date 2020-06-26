import React from "react";
import { Input, Header, Button, Icon } from "semantic-ui-react";

export default function Head() {
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
          content:'Найти',
          color:'blue'
        }}
        placeholder="Поиск..."
        className="header__search"
      />
      <Button
        color="blue"
        content="Корзина"
        icon={<Icon name="cart" />}
        label={{
          as: "a",
          basic: true,
          color: "blue",
          pointing: "left",
          content: "0 руб",
        }}
      />
    </div>
  );
}
