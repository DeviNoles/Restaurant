import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { FoodList } from '../data/food';
import Food from './Food';

const FoodContainer = (props) => {
  let food = Object.keys(FoodList).map( key => {
    return <Food
              key={key}
              details={FoodList[key]}
              addToOrder={props.addToOrder}
              index={key}
            />
  });
  return (
      <Grid stackable columns={3}>
        {food}
      </Grid>
  );
}

FoodContainer.propTypes = {
  addToOrder: PropTypes.func.isRequired
};

export default FoodContainer;
