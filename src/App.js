import React from "react";
import { useSelector, useDispatch } from "react-redux";
import orderBy from "lodash/orderBy";
import axios from "axios";

import { Header, BookCard, Filter } from "./components";
import { Container, Card } from "semantic-ui-react";
import { setBooks } from "./redux/action/books";

import "./app.scss";

function App() {
  const sortBy = (books, filterBy) => {
    switch (filterBy) {
      case "all":
        return books;
      case "price_high":
        return orderBy(books, "price", "desc");
      case "price_low":
        return orderBy(books, "price", "asc");
      case "author":
        return orderBy(books, "author", "asc");
      default:
        return books;
    }
  };
  const filterBooks = (books , searchQuery) => {
    return books.filter(
      (o) =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
  }
  const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery) , filterBy)
  }
  const dispatch = useDispatch();
  const { books, isReady } = useSelector(({ books, filter }) => {
    return {
      books: books.items && searchBooks(books.items, filter.filterBy , filter.searchQuery),
      isReady: books.isReady,
    };
  });

  React.useEffect(() => {
    axios.get("/books").then(({ data }) => {
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
            : books.map((book) => <BookCard key={book.id} {...book}/>)}
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
