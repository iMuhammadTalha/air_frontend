/** @format */
import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ReactSpeedometer from "react-d3-speedometer";
import GoogleMapReact from 'google-map-react';

// import Tooltip from '@mui/material/Tooltip';
// import GoogleMap from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>
    <Icon className="text-red">place</Icon>
    <text style={{ color: 'red' }}>{text}</text>
    </div>;


// function Marker({ text }) {
// 	return (
// 		<Tooltip title={text} placement="top">
// 			<Icon className="text-red">place</Icon>
// 		</Tooltip>
// 	);
// }


class Map extends Component {


    
    static defaultProps = {
        center: {
          lat: 33.6486,
          lng: 72.9912
        },
        zoom: 15
      };
    

    componentDidMount() {
        this.props.getRecentAQI();
    }

    refreshData = () => {
        this.props.getRecentAQI();
    };

    render() {
        const { recentAQI } = this.props;
console.log('RENDER', recentAQI)
        return (
            
                    <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDWopWd36r3M64PhTQnWJY77PtBWkjIINQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >

                <AnyReactComponent
                    lat={33.64384414858928}
                    lng={72.99359373845608}
                    text="Air Node"
                    // icon="text-red"
                />
                </GoogleMapReact>

                {/* <GoogleMap
					bootstrapURLKeys={{
						key: process.env.REACT_APP_MAP_KEY
					}}
					defaultZoom={12}
					defaultCenter={[-34.397, 150.64]}
				>
					<Marker text="Marker Text" lat="-34.397" lng="150.644" />
				</GoogleMap> */}


            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getRecentAQI: Actions.getRecentAQI
        },
        dispatch
    );
}

function mapStateToProps({ DashBoardApp }) {
    console.log(DashBoardApp.DashboardReducer.recentAQI)
    return {
        recentAQI: DashBoardApp.DashboardReducer.recentAQI.aqi
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Map)
);
