import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, deleteFeature } from './actions';

const App = (props) => {
  
  const removeFeature = (price, item) => {
    // dispatch an action here to remove an item
    props.deleteFeature(item);
    console.log(item, price);
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
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
 return {

 };
};

export default connect(
  mapStateToProps,
  { addFeature, deleteFeature }
)(App);
