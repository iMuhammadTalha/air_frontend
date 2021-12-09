/** @format */

import * as Actions from "../actions";

const initialState = {
    routeParams: {},
    humitidyAvgPredicted: [],
    dustAvgPredicted: [],
    temperatureAvgPredicted: [],
    nh3AvgPredicted: [],
    coAvgPredicted: [],
    no2AvgPredicted: [],
    ch4AvgPredicted: [],
    co2AvgPredicted: [],
    nh3Avg: [],
    coAvg: [],
    no2Avg: [],
    ch4Avg: [],
    co2Avg: [],
    dustAvg: [],
    humitidyAvg: [],
    temperatureAvg: [],
    dates: [],
    AQIAvg: []
};

const GraphReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_GRAPHS: {
            return {
                ...state,
                // no2AvgPredicted: action.payload.no2AvgPredicted,

                nh3Avg: action.payload.nh3Avg,
                coAvg: action.payload.coAvg,
                no2Avg: action.payload.no2Avg,
                ch4Avg: action.payload.ch4Avg,
                co2Avg: action.payload.co2Avg,
                dustAvg: action.payload.dustAvg,
                humitidyAvg: action.payload.humitidyAvg,
                temperatureAvg: action.payload.temperatureAvg,
                dates: action.payload.dates,
                AQIAvg: action.payload.AQIAvg
            };
        }
        case Actions.GET_ML_PREDICTED_GRAPHS: {     //Dust, Humidity, Temperature
            return {
                ...state,
                humitidyAvgPredicted: action.payload.humitidyAvgPredicted,
                dustAvgPredicted: action.payload.dustAvgPredicted,
                temperatureAvgPredicted: action.payload.temperatureAvgPredicted,
            
                dustAvg: action.payload.dustAvg,
                humitidyAvg: action.payload.humitidyAvg,
                temperatureAvg: action.payload.temperatureAvg,
                // AQIAvg: action.payload.AQIAvg

                dates: action.payload.dates
            };
        }
        case Actions.GET_ML_PREDICTED_GRAPHS_2: {     //NH3, CO
            return {
                ...state,
                nh3AvgPredicted: action.payload.nh3AvgPredicted,
                coAvgPredicted: action.payload.coAvgPredicted,
                
                nh3Avg: action.payload.nh3Avg,
                coAvg: action.payload.coAvg,

                dates: action.payload.dates
            };
        }
        case Actions.GET_ML_PREDICTED_GRAPHS_3: {     //NO2, CH4, CO2
            return {
                ...state,
                no2AvgPredicted: action.payload.no2AvgPredicted,
                ch4AvgPredicted: action.payload.ch4AvgPredicted,
                co2AvgPredicted: action.payload.co2AvgPredicted,

                no2Avg: action.payload.no2Avg,
                ch4Avg: action.payload.ch4Avg,
                co2Avg: action.payload.co2Avg,

                dates: action.payload.dates
            };
        }
        default: {
            return state;
        }
    }
};

export default GraphReducer;
