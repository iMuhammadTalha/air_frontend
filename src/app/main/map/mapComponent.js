/*global google*/
import "react-bootstrap-typeahead/css/Typeahead.css";
import React from "react";

import {
    Switch,
    Grid,
    Paper,
    TextField,
    Typography,
    FormControlLabel,
    Button,
    MenuItem
} from "@material-ui/core";

import SearchAppUsers from "./SearchAppUsers";
import { withStyles } from "@material-ui/core/styles";
import scss from "./maps.module.scss";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import withReducer from "../../store/withReducer";
import reducer from "./store/reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import AllNearByDrivers from "./AllNearByDrivers";
import { InfoWindow } from "react-google-maps";
import Avatar from "@material-ui/core/Avatar";

const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer
} = require("react-google-maps");
const {
    SearchBox
} = require("react-google-maps/lib/components/places/SearchBox");

const styles = (theme) => ({
    searchInput: {
        left: "35% !important",
        top: "50px !important"
    },

    searchInput0: {
        left: "35% !important",
        top: "0 !important"
    },

    fieldMargin: {
        margin: theme.spacing(1)
    }
});

const MapWithASearchBox = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDWopWd36r3M64PhTQnWJY77PtBWkjIINQ&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    lifecycle({
        componentWillMount() {
            const pickUprefs = {};
            const dropOffRefs = {};
            let searchAppUsersRef = {};

            this.setState({
                isPickUpSelected: false,
                isDropOffSelected: false,
                appUserID: "",
                center: {
                    lat: 41.9,
                    lng: -87.624
                },
                pickup: {
                    lat: 0,
                    lng: 0
                },
                dropoff: {
                    lat: 0,
                    lng: 0
                },
                serviceID: "",
                driverID: "",
                pickUpName: "",
                dropOffName: "",
                autoSelectDriver: true,
                directions: {},
                markers: [],
                activeMarker: null,

                onMapMounted: (ref) => {
                    if (this.state.isPickUpSelected) {
                        pickUprefs.map = ref;
                    } else {
                        dropOffRefs.map = ref;
                    }
                },

                onPickUpMounted: (ref) => {
                    pickUprefs.searchBox = ref;
                },

                onDropOffMounted: (ref) => {
                    dropOffRefs.searchBox = ref;
                },

                onPickUpChanged: () => {
                    const places = pickUprefs.searchBox.getPlaces();

                    const nextMarkers = places.map((place) => ({
                        position: place.geometry.location
                    }));
                    const nextCenter = _.get(
                        nextMarkers,
                        "0.position",
                        this.state.center
                    );

                    this.setState({
                        center: nextCenter,
                        markers: nextMarkers,
                        isPickUpSelected: true,
                        pickUpName: places[0].formatted_address,
                        pickup: {
                            lat: places[0].geometry.location.lat(),
                            lng: places[0].geometry.location.lng()
                        }
                    });
                    this.props.getNearByAllDrivers(
                        places[0].geometry.location.lat(),
                        places[0].geometry.location.lng()
                    );
                },

                onDropOffChanged: () => {
                    const places = dropOffRefs.searchBox.getPlaces();
                    const DirectionsService = new google.maps.DirectionsService();
                    DirectionsService.route(
                        {
                            origin: new google.maps.LatLng(
                                this.state.pickup.lat,
                                this.state.pickup.lng
                            ),
                            destination: new google.maps.LatLng(
                                places[0].geometry.location.lat(),
                                places[0].geometry.location.lng()
                            ),
                            travelMode: google.maps.TravelMode.DRIVING
                        },
                        (result, status) => {
                            if (status === google.maps.DirectionsStatus.OK) {
                                this.setState({
                                    directions: result,
                                    isDropOffSelected: true,
                                    dropOffName: places[0].formatted_address,
                                    dropoff: {
                                        lat: places[0].geometry.location.lat(),
                                        lng: places[0].geometry.location.lng()
                                    }
                                });
                            } else {
                                console.error(
                                    `error fetching directions ${result}`
                                );
                            }
                        }
                    );
                    // eslint-disable-next-line no-undef
                    // const bounds = new google.maps.LatLngBounds();

                    // places.forEach(place => {
                    //     if (place.geometry.viewport) {
                    //         // bounds.union(place.geometry.viewport)
                    //     } else {
                    //         bounds.extend(place.geometry.location)
                    //     }
                    // });
                    // const nextMarkers = places.map(place => ({
                    //     position: place.geometry.location,
                    // }));
                    // const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
                    //
                    // this.setState({
                    //     center: nextCenter,
                    //     markers: nextMarkers,
                    //     isPickUpSelected: true
                    // });
                    // refs.map.fitBounds(bounds);
                },

                handleChange: (event) => {
                    if (event.target.name === "autoSelectDriver") {
                        this.setState(
                            _.set(
                                { ...this.state },
                                event.target.name,
                                event.target.checked
                            )
                        );
                    } else {
                        this.setState(
                            _.set(
                                { ...this.state },
                                event.target.name,
                                event.target.value
                            )
                        );
                    }

                    const name = event.target.name;
                    const autoSelectDriver =
                        event.target.name === "autoSelectDriver"
                            ? event.target.checked
                            : this.state.autoSelectDriver;
                    const serviceID =
                        event.target.name === "serviceID"
                            ? event.target.value
                            : this.state.serviceID;

                    if (name === "autoSelectDriver" || name === "serviceID") {
                        if (!autoSelectDriver && serviceID) {
                            const lat = this.state.pickup.lat;
                            const lng = this.state.pickup.lng;
                            this.props.getAllServiceDrivers(
                                lat,
                                lng,
                                serviceID
                            );
                        }
                    }
                },

                setUserID: (event, { suggestion }) => {
                    this.setState({
                        appUserID: suggestion.id
                    });
                },

                onSearchAppUsersMounted: (ref) => {
                    searchAppUsersRef = ref;
                },

                cancelRide: () => {
                    this.setState({
                        isPickUpSelected: false,
                        isDropOffSelected: false,
                        appUserID: "",
                        center: {
                            lat: 41.9,
                            lng: -87.624
                        },
                        pickup: {
                            lat: 0,
                            lng: 0
                        },
                        dropoff: {
                            lat: 0,
                            lng: 0
                        },
                        serviceID: "",
                        driverID: "",
                        autoSelectDriver: true,
                        directions: {},
                        markers: [],
                        activeMarker: null
                    });
                    searchAppUsersRef.resetAppUsers();
                    this.props.getNearByAllDrivers(0, 0);
                },

                isValidForSubmit: () => {
                    if (!this.state.appUserID) {
                        return false;
                    }

                    if (
                        this.state.pickup.lat === 0 ||
                        this.state.pickup.lng === 0
                    ) {
                        return false;
                    }

                    if (!this.state.serviceID) {
                        return false;
                    }

                    if (!this.state.autoSelectDriver && !this.state.driverID) {
                        return false;
                    }

                    return true;
                },

                dispatchRide: () => {
                    const data = {
                        service_id: this.state.serviceID,
                        app_user_id: this.state.appUserID,
                        driver_id: this.state.autoSelectDriver
                            ? null
                            : this.state.driverID,
                        autoSelectDriver: this.state.autoSelectDriver,
                        source_lat: this.state.pickup.lat,
                        source_long: this.state.pickup.lng,
                        source_name: this.state.pickUpName,
                        distination_lat:
                            this.state.dropoff.lat === 0
                                ? null
                                : this.state.dropoff.lat,
                        distination_long:
                            this.state.dropoff.lng === 0
                                ? null
                                : this.state.dropoff.lng,
                        distination_name:
                            this.state.dropoff.lat === 0
                                ? null
                                : this.state.dropOffName
                    };

                    this.props.dispatchRide(data);

                    this.setState({
                        isPickUpSelected: false,
                        isDropOffSelected: false,
                        appUserID: "",
                        center: {
                            lat: 41.9,
                            lng: -87.624
                        },
                        pickup: {
                            lat: 0,
                            lng: 0
                        },
                        dropoff: {
                            lat: 0,
                            lng: 0
                        },
                        serviceID: "",
                        driverID: "",
                        autoSelectDriver: true,
                        directions: {},
                        markers: [],
                        activeMarker: null
                    });
                    searchAppUsersRef.resetAppUsers();
                    this.props.getNearByAllDrivers(0, 0);
                },

                getCarURL: (status) => {
                    if (status === "offline") {
                        return (
                            window.location.origin +
                            "/admin/assets/images/cars/red.png"
                        );
                    } else if (status === "online") {
                        return (
                            window.location.origin +
                            "/admin/assets/images/cars/green.png"
                        );
                    } else {
                        return (
                            window.location.origin +
                            "/admin/assets/images/cars/black.png"
                        );
                    }
                },

                onDriverClick: (marker) => () => {
                    this.setState({ activeMarker: marker });
                }
            });
        }
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <div className={scss["portal-map-page-wrapper"]}>
        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={15}
            center={props.center}
        >
            <Grid>
                <div>
                    <SearchBox
                        ref={props.onPickUpMounted}
                        controlPosition={google.maps.ControlPosition.TOP_LEFT}
                        onPlacesChanged={props.onPickUpChanged}
                    >
                        <input
                            className={props.classes.searchInput0}
                            type="text"
                            placeholder="Select pickup location"
                            disabled={props.isPickUpSelected}
                            autoFocus={!props.isPickUpSelected}
                            style={{
                                backgroundSize: `25px`,
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `30%`,
                                height: `40px`,
                                marginTop: `10px`,
                                padding: `0px 12px 0 25px`,
                                borderRadius: `3px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `14px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                backgroundImage: `url('https://i2.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png')`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPosition: `left center`,
                                backgroundColor: props.isPickUpSelected
                                    ? "lightgrey"
                                    : "white"
                            }}
                        />
                    </SearchBox>
                </div>
                <div>
                    {props.isPickUpSelected ? (
                        <SearchBox
                            ref={props.onDropOffMounted}
                            controlPosition={
                                google.maps.ControlPosition.TOP_LEFT
                            }
                            onPlacesChanged={props.onDropOffChanged}
                        >
                            <input
                                className={props.classes.searchInput}
                                type="text"
                                placeholder="Select drop off location"
                                disabled={props.isDropOffSelected}
                                style={{
                                    backgroundSize: `25px`,
                                    boxSizing: `border-box`,
                                    border: `1px solid transparent`,
                                    width: `30%`,
                                    height: `40px`,
                                    marginTop: `10px`,
                                    padding: `0px 12px 0 25px`,
                                    borderRadius: `3px`,
                                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                    fontSize: `14px`,
                                    outline: `none`,
                                    textOverflow: `ellipses`,
                                    backgroundImage: `url('https://i2.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png')`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `left center`
                                }}
                            />
                        </SearchBox>
                    ) : (
                        ""
                    )}
                </div>
            </Grid>
            {props.nearByAllDrivers.map((marker, index) => (
                <Marker
                    key={marker.id}
                    position={{ lat: marker.lat, lng: marker.long }}
                    icon={{
                        url: props.getCarURL(marker.status),
                        anchor: new google.maps.Point(5, 58)
                    }}
                    onClick={props.onDriverClick(marker)}
                >
                    {marker === props.activeMarker && (
                        <InfoWindow options={{ disableAutoPan: true }}>
                            <div className={scss["portal-maps-info-window"]}>
                                <Avatar
                                    alt={`${marker.first_name} ${marker.last_name}`}
                                    src={`${process.env.REACT_APP_PUBLIC_URL}/${marker.profile_pic}`}
                                />
                                <strong>
                                    {`${marker.first_name} ${marker.last_name}`}{" "}
                                    <br />
                                    <span
                                        style={{
                                            fontWeight: 400,
                                            fontSize: "xx-small"
                                        }}
                                    >
                                        {" "}
                                        {marker.service_name} - {marker.status}{" "}
                                    </span>
                                </strong>
                            </div>
                        </InfoWindow>
                    )}
                </Marker>
            ))}
            {props.markers.map((marker, index) => (
                <Marker
                    key={index}
                    draggable={false}
                    position={marker.position}
                />
            ))}
            {props.directions && (
                <DirectionsRenderer directions={props.directions} />
            )}
        </GoogleMap>

        {props.isPickUpSelected ? (
            <Grid
                style={{ left: "68%", maxWidth: "36%" }}
                container
                spacing={10}
                className={scss["portal-map-cards"]}
                alignItems="stretch"
                direction="column"
                justify="space-around"
            >
                <Grid item xs={12} sm={12} md={12}>
                    <Paper elevation={4} style={{ padding: 10 }}>
                        <Typography component="span">
                            <TextField
                                value={props.serviceID}
                                name="serviceID"
                                label="Service"
                                select
                                variant="outlined"
                                margin="dense"
                                required
                                onChange={props.handleChange}
                                fullWidth={true}
                            >
                                {props.services.map((service) => (
                                    <option key={service.id} value={service.id}>
                                        {service.name}
                                    </option>
                                ))}
                            </TextField>

                            <SearchAppUsers
                                onSuggestionSelected={props.setUserID}
                                ref={props.onSearchAppUsersMounted}
                            />

                            <FormControlLabel
                                control={
                                    <Switch
                                        name="autoSelectDriver"
                                        checked={props.autoSelectDriver}
                                        onChange={props.handleChange}
                                    />
                                }
                                label="Auto Assign Driver"
                            />

                            {!props.autoSelectDriver ? (
                                props.nearByServiceDrivers ? (
                                    <TextField
                                        value={props.driverID}
                                        name="driverID"
                                        disabled={!props.serviceID}
                                        label={
                                            !props.serviceID
                                                ? "Please select service"
                                                : "Select driver"
                                        }
                                        required={!props.autoSelectDriver}
                                        variant="outlined"
                                        margin="dense"
                                        onChange={props.handleChange}
                                        fullWidth={true}
                                        select
                                    >
                                        {props.nearByServiceDrivers.map(
                                            (driver) => (
                                                <MenuItem
                                                    key={driver.id}
                                                    value={driver.id}
                                                >
                                                    <ListItemText
                                                        primary={
                                                            driver.first_name +
                                                            " " +
                                                            driver.last_name
                                                        }
                                                        secondary={
                                                            driver.mobile_number +
                                                            " - " +
                                                            driver.car_type +
                                                            " " +
                                                            driver.car_model +
                                                            " " +
                                                            driver.car_number
                                                        }
                                                    />
                                                </MenuItem>
                                            )
                                        )}
                                    </TextField>
                                ) : (
                                    <TextField
                                        value={props.driverID}
                                        name="driverID"
                                        disabled={!props.serviceID}
                                        label="No driver available around this pickup point"
                                        required={false}
                                        variant="outlined"
                                        margin="dense"
                                        onChange={props.handleChange}
                                        fullWidth={true}
                                    />
                                )
                            ) : (
                                ""
                            )}
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid key="dispatch-button" item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    disabled={!props.isValidForSubmit()}
                                    onClick={props.dispatchRide}
                                >
                                    DISPATCH
                                </Button>
                            </Grid>
                            <Grid key="cancel-button" item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="secondary"
                                    onClick={props.cancelRide}
                                >
                                    CANCEL
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        ) : (
            ""
        )}

        <AllNearByDrivers
            markers={props.nearByAllDrivers}
            activeMarker={props.activeMarker}
            onMarkerClick={props.onDriverClick}
        />
    </div>
));

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAllServiceDrivers: Actions.getAllServiceDrivers,
            dispatchRide: Actions.dispatchRide,
            getNearByAllDrivers: Actions.getNearByAllDrivers
        },
        dispatch
    );
}

function mapStateToProps({ DispatchApp }) {
    return {
        nearByServiceDrivers: DispatchApp.DispatchReducer.nearByServiceDrivers,
        nearByAllDrivers: DispatchApp.DispatchReducer.nearByAllDrivers
    };
}

export default withReducer(
    "DispatchApp",
    reducer
)(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(withStyles(styles, { withTheme: true })(MapWithASearchBox))
    )
);