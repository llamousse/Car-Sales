const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload2, 
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        {
                            name: action.payload
                        }
                    ]
                },
                store: state.store.filter(item => item.name !== action.payload)
            };

        case 'DELETE_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.name !== action.payload)
                },
                store: [
                    ...state.store,
                    {name: action.payload, price: action.price}
                ]
            }

        default:
            return state;
    }
};