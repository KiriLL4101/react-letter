import React from 'react';
import { Header, BookCard, Filter} from './components'
import { Container, Card } from 'semantic-ui-react'
import axios from 'axios';

import './app.scss'


function App() {
  const [ activeItem, setActiveItem] = React.useState("all");
  const [ books , setBooks ] = React.useState(null)
  React.useEffect( () => {
    axios.get('http://localhost:3001/books').then(({ data }) => {
      setBooks(data)
    });
  }, [])
  function onClickActiveItem(name){
    setActiveItem(name)
  }
  return (
    <div className="App">
      <Container>
        <Header/>
        <Filter activeItem={activeItem} onClickItem={onClickActiveItem}/>
        <Card.Group itemsPerRow={4}>
            {
              books &&
               books.map( book => (
                <BookCard key={book.id} {...book}/>
               ))
            }
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
