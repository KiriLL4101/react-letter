import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from '../redux/action/filter';
import { Menu } from "semantic-ui-react";

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector(({ filter }) => {
    return {
      filter: filter.filterBy
    };
  });
  function onClickItem(name) {
    dispatch(setFilter(name))
  }
  return (
    <Menu secondary>
      <Menu.Item
        active={filter === "all"}
        onClick={onClickItem.bind(null, "all")}
      >
        Все
      </Menu.Item>
      <Menu.Item
        active={filter === "price_high"}
        onClick={onClickItem.bind(null, "price_high")}
      >
        Цена (дорогие)
      </Menu.Item>
      <Menu.Item
        active={filter === "price_low"}
        onClick={onClickItem.bind(null, "price_low")}
      >
        Цена (дешевые)
      </Menu.Item>
      <Menu.Item
        active={filter === "author"}
        onClick={onClickItem.bind(null, "author")}
      >
        Автор
      </Menu.Item>
    </Menu>
  );
}
