import React, { Fragment } from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Container, Button } from 'semantic-ui-react';

import NavBar from './NavBar';
import Footer from './Footer';
import FoodContainer from './FoodContainer';

const Menu = (props) => (
  <Fragment>
    <NavBar order={props.order} orderTotal={props.orderTotal}>
      {props.orderTotal > 0 && <Button as={Link} to='/cart' color='purple' id='menu-checkout-btn'>Checkout</Button>}
    </NavBar>
    <Container id='page-container'>
      <Header as='h1' id='page-header'>Food Selection</Header>
      <Container textAlign='center' id='menu-free-banner'>
        <p id='menu-banner-text'>🎉 Free delivery for orders over $12 🎉</p>
      </Container>
      <Container id='menu-food-container'>
          <FoodContainer addToOrder={props.addToOrder} />
      </Container>
    </Container>
    <Footer />
  </Fragment>
);

Menu.propTypes = {
  order: PropTypes.array,
  orderTotal: PropTypes.number,
  addToOrder: PropTypes.func.isRequired
};

export default Menu;
