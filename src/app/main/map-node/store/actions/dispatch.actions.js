/** @format */

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { logoutUser } from "../../../../auth/store/actions";
import store from "app/store";
export const GET_ALL_SERVICES = "[DISPATCH APP] GET SERVICES";
export const GET_NEAR_BY_SERVICE_DRIVERS =
    "[DISPATCH APP] GET NEAR BY SERVICE DRIVERS";
export const GET_NEAR_BY_ALL_DRIVERS = "[DISPATCH APP] GET NEAR BY ALL DRIVERS";

export const getAllServices = () => (dispatch) => {
    let query = "services/get-all-services";

    axios.get(Base_URL + query).then(
        (response) => {
            dispatch({ type: GET_ALL_SERVICES, payload: response.data });
        },

        (error) => {
            if (error.request.status === 440) {
                dispatch(
                    showMessage({
                        message: "Your session expired. Please login again.",
                        variant: "error"
                    })
                );
                store.dispatch(logoutUser());
            } else {
                dispatch(
                    showMessage({
                        message: "Unable to fetch services from server.",
                        variant: "error"
                    })
                );
            }
        }
    );
};

export const getAllServiceDrivers = (lat, lng, service_id) => (dispatch) => {
    let query = `user/driver/get-nearby-specific-service-drivers-in-range/${service_id}/${lat}/${lng}`;

    axios.get(Base_URL + query).then(
        (response) => {
            dispatch({
                type: GET_NEAR_BY_SERVICE_DRIVERS,
                payload: response.data
            });
        },

        (error) => {
            if (!error.response) {
                dispatch(
                    showMessage({
                        message: error.data.msg,
                        variant: "error"
                    })
                );
            } else {
                if (error.request.status === 440) {
                    dispatch(
                        showMessage({
                            message:
                                "Your session expired. Please login again.",
                            variant: "error"
                        })
                    );
                    dispatch(logoutUser);
                } else {
                    dispatch(
                        showMessage({
                            message: error.data.msg,
                            variant: "error"
                        })
                    );
                }
            }
        }
    );
};

export const getNearByAllDrivers = (lat, lng) => (dispatch) => {
    if (lat === 0 && lng === 0) {
        dispatch({ type: GET_NEAR_BY_ALL_DRIVERS, payload: [] });
    } else {
        let query = `user/driver/get-nearby-drivers-in-range/${lat}/${lng}`;

        axios.get(Base_URL + query).then(
            (response) => {
                dispatch({
                    type: GET_NEAR_BY_ALL_DRIVERS,
                    payload: response.data
                });
            },

            (error) => {
                if (!error.response) {
                    dispatch(
                        showMessage({
                            message: error.data.msg,
                            variant: "error"
                        })
                    );
                } else {
                    if (error.request.status === 440) {
                        dispatch(
                            showMessage({
                                message:
                                    "Your session expired. Please login again.",
                                variant: "error"
                            })
                        );
                        store.dispatch(logoutUser());
                    } else {
                        dispatch(
                            showMessage({
                                message: error.data.msg,
                                variant: "error"
                            })
                        );
                    }
                }
            }
        );
    }
};

export const dispatchRide = (data) => (dispatch) => {
    let query = `rides/book-ride/`;

    axios.post(Base_URL + query, data).then(
        (response) => {
            dispatch({ type: GET_NEAR_BY_SERVICE_DRIVERS, payload: [] });
            dispatch(
                showMessage({
                    message: "Ride dispatched successfully...",
                    variant: "success"
                })
            );
        },

        (error) => {
            dispatch({ type: GET_NEAR_BY_SERVICE_DRIVERS, payload: [] });
            if (!error.response) {
                dispatch(
                    showMessage({
                        message: error.data.msg,
                        variant: "error"
                    })
                );
            } else {
                if (error.request.status === 440) {
                    dispatch(
                        showMessage({
                            message:
                                "Your session expired. Please login again.",
                            variant: "error"
                        })
                    );
                    dispatch(logoutUser);
                } else {
                    dispatch(
                        showMessage({
                            message: error.response.data.msg,
                            variant: "error"
                        })
                    );
                }
            }
        }
    );
};
