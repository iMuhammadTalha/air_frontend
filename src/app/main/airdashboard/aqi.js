import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class aqi extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { aqi, dates } = this.props;
        return (

            <div style={{display: 'flex'}}> 

                        <div className="widget flex w-full sm:w-1/6 md:w-1/6 p-12">
                            
                            <Paper className="w-full rounded-8 border-1" style={aqi[1]<50 ? {backgroundColor:"#00E000"} : aqi[1]<100 ? {backgroundColor:"#FFFF00"} : aqi[1]<150 ? {backgroundColor:"#FF7600"} : aqi[1]<200 ? {backgroundColor:"#FF0000"} : aqi[1]<300 ? {backgroundColor:"#990049"} : aqi[1]<400 ? {backgroundColor:"#7E0023"} : aqi[1]>500 ? {backgroundColor:"#3E0023"} : {} }>
                                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                                    <Typography
                                        className="text-56 leading-none text-purple-dark">{aqi ? aqi[1] : 0}</Typography>
                                        AQI
                                    <Typography className="text-16" color="textSecondary"><h2>{dates ? dates[1] : '-' }</h2></Typography>
                                </div>
                            </Paper>
                        </div>

                        <div className="widget flex w-full sm:w-1/6 md:w-1/6 p-12">
                            
                            <Paper className="w-full rounded-8 border-1" style={aqi[2]<50 ? {backgroundColor:"#00E000"} : aqi[2]<100 ? {backgroundColor:"#FFFF00"} : aqi[2]<150 ? {backgroundColor:"#FF7600"} : aqi[2]<200 ? {backgroundColor:"#FF0000"} : aqi[2]<300 ? {backgroundColor:"#990049"} : aqi[2]<400 ? {backgroundColor:"#7E0023"} : aqi[2]>500 ? {backgroundColor:"#3E0023"} : {} }>
                                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                                <Typography
                                        className="text-56 leading-none text-purple-dark">{aqi ? aqi[2] : 0}</Typography>
                                        AQI
                                    <Typography className="text-16" color="textSecondary"><h2>{dates ? dates[2] : '-' }</h2></Typography>
                                </div>
                            </Paper>
                        </div>

                        <div className="widget flex w-full sm:w-1/6 md:w-1/6 p-12">
                            
                            <Paper className="w-full rounded-8 border-1" style={aqi[3]<50 ? {backgroundColor:"#00E000"} : aqi[3]<100 ? {backgroundColor:"#FFFF00"} : aqi[3]<150 ? {backgroundColor:"#FF7600"} : aqi[3]<200 ? {backgroundColor:"#FF0000"} : aqi[3]<300 ? {backgroundColor:"#990049"} : aqi[3]<400 ? {backgroundColor:"#7E0023"} : aqi[3]>500 ? {backgroundColor:"#3E0023"} : {} }>
                                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                                <Typography
                                        className="text-56 leading-none text-purple-dark">{aqi ? aqi[3] : 0}</Typography>
                                        AQI
                                    <Typography className="text-16" color="textSecondary"><h2>{dates ? dates[3] : '-' }</h2></Typography>
                                </div>
                            </Paper>
                        </div>

                        <div className="widget flex w-full sm:w-1/6 md:w-1/6 p-12">
                            
                            <Paper className="w-full rounded-8 border-1" style={aqi[4]<50 ? {backgroundColor:"#00E000"} : aqi[4]<100 ? {backgroundColor:"#FFFF00"} : aqi[4]<150 ? {backgroundColor:"#FF7600"} : aqi[4]<200 ? {backgroundColor:"#FF0000"} : aqi[4]<300 ? {backgroundColor:"#990049"} : aqi[4]<400 ? {backgroundColor:"#7E0023"} : aqi[4]>500 ? {backgroundColor:"#3E0023"} : {} }>
                                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                                <Typography
                                        className="text-56 leading-none text-purple-dark">{aqi ? aqi[4] : 0}</Typography>
                                        AQI
                                    <Typography className="text-16" color="textSecondary"><h2>{dates ? dates[4] : '-' }</h2></Typography>
                                </div>
                            </Paper>
                        </div>

                        <div className="widget flex w-full sm:w-1/6 md:w-1/6 p-12">
                            
                            <Paper className="w-full rounded-8 border-1" style={aqi[5]<50 ? {backgroundColor:"#00E000"} : aqi[5]<100 ? {backgroundColor:"#FFFF00"} : aqi[5]<150 ? {backgroundColor:"#FF7600"} : aqi[5]<200 ? {backgroundColor:"#FF0000"} : aqi[5]<300 ? {backgroundColor:"#990049"} : aqi[5]<400 ? {backgroundColor:"#7E0023"} : aqi[5]>500 ? {backgroundColor:"#3E0023"} : {} }>
                            <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                                <Typography
                                        className="text-56 leading-none text-purple-dark">{aqi ? aqi[5] : 0}</Typography>
                                        AQI
                                    <Typography className="text-16" color="textSecondary"><h2>{dates ? dates[5] : '-' }</h2></Typography>
                                </div>
                            </Paper>
                        </div>

                        <div className="widget flex w-full sm:w-1/6 md:w-1/6 p-12">
                            
                            <Paper className="w-full rounded-8 border-1" style={aqi[6]<50 ? {backgroundColor:"#00E000"} : aqi[6]<100 ? {backgroundColor:"#FFFF00"} : aqi[6]<150 ? {backgroundColor:"#FF7600"} : aqi[6]<200 ? {backgroundColor:"#FF0000"} : aqi[6]<300 ? {backgroundColor:"#990049"} : aqi[6]<400 ? {backgroundColor:"#7E0023"} : aqi[6]>500 ? {backgroundColor:"#3E0023"} : {} }>
                            <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                                <Typography
                                        className="text-56 leading-none text-purple-dark">{aqi ? aqi[6] : 0}</Typography>
                                        AQI
                                    <Typography className="text-16" color="textSecondary"><h2>{dates ? dates[6] : '-' }</h2></Typography>
                                </div>
                            </Paper>
                        </div>

            

            
            </div>
            
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getARecentReading: Actions.getARecentReading
        },
        dispatch
    );
}

function mapStateToProps({ AirDashboardApp, auth }) {
    console.log(AirDashboardApp.AirDashboardReducer.AQIAvg);
    return {
        aqi: AirDashboardApp.AirDashboardReducer.AQIAvg,
        dates: AirDashboardApp.AirDashboardReducer.dates,

        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(aqi)
);
