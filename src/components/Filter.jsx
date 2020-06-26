import React from "react";
import { Menu } from "semantic-ui-react";

export default function Filter({ activeItem, onClickItem}) {
  return (
    <Menu secondary>
      <Menu.Item
        active={activeItem === "all"}
        onClick={onClickItem.bind(null, "all")}
      >
        Все
      </Menu.Item>
      <Menu.Item
        active={activeItem === "price_high"}
        onClick={onClickItem.bind(null, "price_high")}
      >
        Цена (дорогие)
      </Menu.Item>
      <Menu.Item
        active={activeItem === "price_low"}
        onClick={onClickItem.bind(null, "price_low")}
      >
        Цена (дешевые)
      </Menu.Item>
      <Menu.Item
        active={activeItem === "author"}
        onClick={onClickItem.bind(null, "author")}
      >
        Автор
      </Menu.Item>
    </Menu>
  );
}
