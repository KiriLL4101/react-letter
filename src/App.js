import React from "react";
import { Header, BookCard, Filter } from "./components";
import { Container, Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setBooks } from "./redux/action/books";
import axios from "axios";

import "./app.scss";

function App() {
  const dispatch = useDispatch();
  const { books, isReady } = useSelector(({ books }) => {
    return {
      books: books.items,
      isReady: books.isReady,
    };
  });


  React.useEffect(() => {
    axios.get("http://localhost:3001/books").then(({ data }) => {
      dispatch(setBooks(data));
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <Header />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map((book) => <BookCard key={book.id} {...book} />)}
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
