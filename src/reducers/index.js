const initialState = {
    features: [
        {
            name: 'Matte black wrap',
            price: 2000,
            id: 6576237748
        }
    ]
};

export const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_MEMBER':
        //     return {
        //         ...state,
        //         members: [
        //             ...state.members,
        //             { name: action.payload, dragonStatus: false }
        //         ]
        //     };
        default:
            return state;
    }
};