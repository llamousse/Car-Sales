import React from 'react';
// import { connect } from 'react-redux';
// import { addFeature } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => props.buyItem(props.feature.name, props.feature.price)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

// const mapStateToProps = state => {
//   return {
//     car: state.car
//   };
// }

// export default connect(
//   mapStateToProps,
//   { addFeature }
// )(AdditionalFeature);
