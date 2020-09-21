import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



const CardItems = (props) => (
  <Card
    href="#Example"
    image={ <img src={props.image} height={300} /> }
    header={props.header}
    description={props.description}
    extra={<a>
        <Icon name={props.icon} />
        {props.metadata}
      </a>}
    color={'orange'}
  />
)

export default CardItems;