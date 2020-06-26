import React from 'react';
import { Header, BookCard, Filter} from './components'
import { Container, Card } from 'semantic-ui-react'

import './app.scss'
import books from './db.json'


function App() {
  const [ activeItem, setActiveItem] = React.useState("all");

  return (
    <div className="App">
      <Container>
        <Header/>
        <Filter activeItem={activeItem} onClickItem={name => setActiveItem(name)}/>
        <Card.Group itemsPerRow={5}>
            {
              books.books &&
               books.books.map( book => (
                <BookCard key={book.id} {...book}/>
               ))
            }
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
