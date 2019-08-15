// Build an action creator for any event that might 
// happen in your app that should cause your state to be updated

// action creator to add features to car
export const addFeature = (feature, price) => {
    console.log('action creator was invoked');
    return { 
        type: 'ADD_FEATURE',
        payload: feature,
        payload2: price
    };
};

// action creator to remove features on car
export const deleteFeature = (feature) => {
    return {
        type: 'DELETE_FEATURE',
        payload: feature
    };
};