import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, deleteFeature } from './actions';

const App = (props) => {
  
  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    props.deleteFeature(item);
    console.log(item);
  };

  const buyItem = (item, price) => {
    // dispatch an action here to add an item
    props.addFeature(item, price);
    console.log(item);
    console.log(price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
 return {
    ...state
 };
};

export default connect(
  mapStateToProps,
  { addFeature, deleteFeature }
)(App);
