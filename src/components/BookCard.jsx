import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default function BookCard({ title , author, image, price}) {
    return (
      <Card color="blue">
        <Image src={image} className='card__img' as='img'/>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>{author}</span>
          </Card.Meta>
          <Card.Description>
            {price} руб.
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
            <Button as="button" basic color='blue' fluid>
              Добавить в корзину
            </Button>
        </Card.Content>
      </Card>
    )
}
