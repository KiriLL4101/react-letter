import React from "react";
import { Header, BookCard, Filter } from "./components";
import { Container, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { setBooks } from "./redux/action/books";
import axios from "axios";

import "./app.scss";

function App(props) {
  const [activeItem, setActiveItem] = React.useState("all");
  // const [books, setBooks] = React.useState(null);
  React.useEffect(() => {
    axios.get("http://localhost:3001/books").then(({ data }) => {
      console.log(data);
      props.setBooks(data);
    });
  }, []);
  function onClickActiveItem(name) {
    setActiveItem(name);
  }

  console.log(props);
  return (
    <div className="App">
      <Container>
        <Header />
        <Filter activeItem={activeItem} onClickItem={onClickActiveItem} />
        <Card.Group itemsPerRow={4}>
          {!props.books
            ? "Загрузка..."
            : props.books.map((book) => <BookCard key={book.id} {...book} />)}
        </Card.Group>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    books: state.items,
  };
};

const mapDipatchToProps = {
  setBooks
};
export default connect(mapStateToProps, mapDipatchToProps)(App);
