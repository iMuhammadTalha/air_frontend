/** @format */
import moment from "moment";

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { authRoles } from "app/auth";
import store from "app/store";
export const GET_ALL_AIRDASHBOARDS = "[AIRDASHBOARDS APP] GET AIRDASHBOARDS";

export const GET_RECENT_AQI = "[DASHBOARD APP] GET RECENT AQI";
export const GET_A_RECENT_READING = "[DASHBOARD APP] GET RECENT READING";
export const GET_PAST_AQI_DATA = "[DASHBOARD APP] GET PAST AQI";

let selectedSearch = {
    nodeId: 1
};


export function searchReading(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getRecentAQI();
}

export function searchAQI(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getRecentAQI();
}
export function searchParameter(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getARecentReading();
}

export const getRecentAQI = () => (dispatch) => {
    const query = "air/get-AQI/"+selectedSearch.nodeId;

    axios
        .get(Base_URL + query)
        .then((res) => {
            console.log(res.data.aqi);
            dispatch({
                type: GET_RECENT_AQI,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get recent aqi...",
                    variant: "error"
                })
            );
        });
};

export const getARecentReading = () => (dispatch) => {
    
    let querys = "air/get-a-recent-reading/"+selectedSearch.nodeId;
    
    axios
        .get(Base_URL + querys)
        .then((res) => {
            // console.log(res.data.created_time)
            // console.log(moment(res.data.created_time).fromNow())
            dispatch({
                type: GET_A_RECENT_READING,
                payload: res.data
            });
        })
        .then(() => dispatch(updateAQI()))
        .then(() => dispatch(getPastAQIData()))
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get recent air reading...",
                    variant: "error"
                })
            );
        });
};

export const getPastAQIData = () => (dispatch) => {
    
    
    let query = "air/get-aqi-graph/" +selectedSearch.nodeId ;
    
    
    axios
        .get(Base_URL + query)
        .then((res) => {
            console.log('RESPONSE',res.data);
            dispatch({
                type: GET_PAST_AQI_DATA,
                payload: res.data,
            });

            return {};
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get graphs...",
                    variant: "error"
                })
            );
        });
};

export function updateAQI() {
    return getRecentAQI();
}