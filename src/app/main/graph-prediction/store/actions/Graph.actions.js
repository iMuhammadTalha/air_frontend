/** @format */

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { authRoles } from "app/auth";
import store from "app/store";

export const GET_ALL_GRAPHS = "[GRAPHS APP] GET GRAPHS";
export const GET_ML_PREDICTED_GRAPHS = "[GRAPHS APP] GET ML GRAPHS";
export const GET_ML_PREDICTED_GRAPHS_2 = "[GRAPHS APP] GET ML GRAPHS 2";
export const GET_ML_PREDICTED_GRAPHS_3 = "[GRAPHS APP] GET ML GRAPHS 3";

let selectedSearch = {
    nodeId: 1
};

export function getAllGraphs() {
    return getGraphsData();
}

export const getGraphsData = () => (dispatch) => {
    
    
    let query = "air/get-aqi-graph/" +selectedSearch.nodeId ;
    

    axios
        .get(Base_URL + query)
        .then(async (res) =>  {
            console.log('RESPONSE',res.data);
            dispatch({
                type: GET_ALL_GRAPHS,
                payload: res.data,
            });
            dispatch(
                showMessage({
                    message: "Please wait predictions will be shown in a while!",
                    variant: "success"
                })
            );
            return {};
        })
        .catch((err) => {
            console.log('ERROR#',err);
            dispatch(
                showMessage({
                    message: "Unable to get graphs...",
                    variant: "error"
                })
            );
        });

        // // Dust, Humidity, Temperature
        let MLquery = "air/get-aqi-graph-ml/" +selectedSearch.nodeId ;
        // NH3, CO
        let MLquery2 = "air/get-aqi-graph-ml-2/" +selectedSearch.nodeId ;
        // NO2, CH4, CO2
        let MLquery3 = "air/get-aqi-graph-ml-3/" +selectedSearch.nodeId ;
        axios
        .get(Base_URL + MLquery)
        .then(async (res) =>  {
            console.log('ML RESPONSE',res.data);
            dispatch({
                type: GET_ML_PREDICTED_GRAPHS,
                payload: res.data,
            });

            // NH3, CO 
            axios
            .get(Base_URL + MLquery2)
            .then(async (res) =>  {
                console.log('2 ML RESPONSE',res.data);
                dispatch({
                    type: GET_ML_PREDICTED_GRAPHS_2,
                    payload: res.data,
                });

                // NO2, CH4, CO2
                axios
                .get(Base_URL + MLquery3)
                .then(async (res) =>  {
                    console.log('3 ML RESPONSE',res.data);
                    dispatch({
                        type: GET_ML_PREDICTED_GRAPHS_3,
                        payload: res.data,
                    });

                    return {};
                })
                .catch((err) => {
                    console.log('ERROR#',err);
                    dispatch(
                        showMessage({
                            message: "Unable to get ML graphs...",
                            variant: "error"
                        })
                    );
                });
    
                return {};
            })
            .catch((err) => {
                console.log('ERROR#',err);
                dispatch(
                    showMessage({
                        message: "Unable to get ML graphs...",
                        variant: "error"
                    })
                );
            });
            return {};
        })
        .catch((err) => {
            console.log('ERROR#',err);
            dispatch(
                showMessage({
                    message: "Unable to get ML graphs...",
                    variant: "error"
                })
            );
        });

        // NH3, CO
        // let MLquery2 = "air/get-aqi-graph-ml-2/" +selectedSearch.nodeId ;
        // axios
        // .get(Base_URL + MLquery2)
        // .then(async (res) =>  {
        //     console.log('ML RESPONSE',res.data);
        //     dispatch({
        //         type: GET_ML_PREDICTED_GRAPHS_2,
        //         payload: res.data,
        //     });

        //     return {};
        // })
        // .catch((err) => {
        //     console.log('ERROR#',err);
        //     dispatch(
        //         showMessage({
        //             message: "Unable to get ML graphs...",
        //             variant: "error"
        //         })
        //     );
        // });

        // // NO2, CH4, CO2
        // let MLquery3 = "air/get-aqi-graph-ml-3/" +selectedSearch.nodeId ;
        // axios
        // .get(Base_URL + MLquery2)
        // .then(async (res) =>  {
        //     console.log('ML RESPONSE',res.data);
        //     dispatch({
        //         type: GET_ML_PREDICTED_GRAPHS_3,
        //         payload: res.data,
        //     });

        //     return {};
        // })
        // .catch((err) => {
        //     console.log('ERROR#',err);
        //     dispatch(
        //         showMessage({
        //             message: "Unable to get ML graphs...",
        //             variant: "error"
        //         })
        //     );
        // });
};


export function searchReading(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getGraphsData();
}