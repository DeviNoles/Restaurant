import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice, formatIngredients} from '../helpers';

class Food extends Component {
  static propTypes = {
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired
  }

  render(){
    const {name, ingredients, image, price } = this.props.details;
    return(
      <Grid.Column mobile={5} tablet={8} computer={5}>
        <Segment id='food-card' raised>
          <Image src={image} />
          <Header as='h3'>{name}</Header>
          <p>{formatIngredients(ingredients)}</p>
          <div id='food-order-info'>
            <Header as='h3'>{formatPrice(price)}</Header>
            <p>
              <Button onClick={() => this.props.addToOrder(this.props.index)} color='blue'>Add to order</Button>
            </p>
          </div>

        </Segment>
      </Grid.Column>
    )
  }
}

export default Food;
