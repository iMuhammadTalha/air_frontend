import * as Actions from "../actions";

const initialState = {
    services: [],
    nearByServiceDrivers: [],
    nearByAllDrivers: [],
};

const DispatchReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_SERVICES: {
            return {
                ...state,
                services: action.payload
            };
        }
        case Actions.GET_NEAR_BY_SERVICE_DRIVERS: {
            return {
                ...state,
                nearByServiceDrivers: action.payload
            };
        }
        case Actions.GET_NEAR_BY_ALL_DRIVERS: {
            return {
                ...state,
                nearByAllDrivers: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default DispatchReducer;
