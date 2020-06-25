import React, { Component } from "react";
import { Menu, Header, Button, Icon } from "semantic-ui-react";


export default class Head extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item name="browse" onClick={this.handleItemClick}>
          <Header
            as="h2"
            image={<Icon name="book"/>}
            content="Letter"
            color="blue"
            size="huge"
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="help" onClick={this.handleItemClick}>
            <Button
              basic
              color="blue"
              content="Корзина"
              icon={<Icon name="cart arrow down"/>}
              label={{
                as: "a",
                basic: true,
                color: "blue",
                pointing: "left",
                content: "0 руб",
              }}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
