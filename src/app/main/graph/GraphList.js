/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import { Chart } from 'react-charts'
import {Line} from 'react-chartjs-2';
import { FuseAnimateGroup } from "@fuse";

import {Paper, Typography} from "@material-ui/core";


import { Bar } from "react-chartjs-2";


class GraphList extends Component {
    

    render() {
        const { graphs, dates, AQIAvg,  nh3Avg,  coAvg, no2Avg, ch4Avg, co2Avg,  dustAvg, humitidyAvg, temperatureAvg, AQIAvgColor, nh3AvgColor, coAvgColor, no2AvgColor, ch4AvgColor, co2AvgColor, dustAvgColor} = this.props;
        let data = graphs;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <div className="w-full p-12">
                <FuseAnimateGroup
                    className="flex flex-wrap"
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >

                <div className="mb-16 w-full">
                    <div className="widget w-full p-16">
                        <Paper className="w-full rounded-8 border-1">
                            <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "AQI",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: AQIAvg,
                                    // Color of each bar
                                    backgroundColor: AQIAvgColor,
                                    // Border color of each bar
                                    borderColor: AQIAvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={380}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                        </Paper>
                    </div>
                </div>       


                <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                    <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "NH3",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: nh3Avg,
                                    // Color of each bar
                                    backgroundColor: nh3AvgColor,
                                    // Border color of each bar
                                    borderColor: nh3AvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={300}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                    <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "CO",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: coAvg,
                                    // Color of each bar
                                    backgroundColor: coAvgColor,
                                    // Border color of each bar
                                    borderColor: coAvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={300}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                    <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "NO2",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: no2Avg,
                                    // Color of each bar
                                    backgroundColor: no2AvgColor,
                                    // Border color of each bar
                                    borderColor: no2AvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={300}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                    <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "CH4",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: ch4Avg,
                                    // Color of each bar
                                    backgroundColor: ch4AvgColor,
                                    // Border color of each bar
                                    borderColor: ch4AvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={300}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                    <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "CO2",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: co2Avg,
                                    // Color of each bar
                                    backgroundColor: co2AvgColor,
                                    // Border color of each bar
                                    borderColor: co2AvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={300}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                    <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                // ["1st bar", "2nd bar", "3rd bar", "4th bar"]
                                labels: dates,
                                datasets: [
                                {
                                    // Label for bars
                                    label: "Dust",
                                    // Data or value of your each variable
                                    // [1552, 1319, 613, 1400]
                                    data: dustAvg,
                                    // Color of each bar
                                    backgroundColor: dustAvgColor,
                                    // Border color of each bar
                                    borderColor: dustAvgColor,
                                    borderWidth: 0.5,
                                },
                                ],
                            }}
                            // Height of graph
                            height={300}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                yAxes: [
                                    {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                    },
                                ],
                                },
                                legend: {
                                labels: {
                                    fontSize: 15,
                                },
                                },
                            }}
                            />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Humidity',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: humitidyAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Humidity',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: temperatureAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Temperature',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>



                    {/* <div className="mb-16 w-full">
                        <div className="widget w-full p-16">
                            <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'AQI',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: AQIAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'AQI',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                        </div>
                    </div> */}


                    {/* <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'NH3',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: nh3Avg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'NH3',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'CO',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: coAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'CO',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'NO2',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: no2Avg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'NO2',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'CH4',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: ch4Avg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'CH4',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'CO2',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: co2Avg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'CO2',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Dust',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: dustAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Dust',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Humidity',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: humitidyAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Humidity',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: temperatureAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Temperature',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div> */}


                </FuseAnimateGroup>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getGraphsData: Actions.getGraphsData
        },
        dispatch
    );
}

function mapStateToProps({ GraphApp }) {
    

    let AQIAvgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.AQIAvg.length; i++){
        if(GraphApp.GraphReducer.AQIAvg[i]<50){
            AQIAvgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.AQIAvg[i]<100){
            AQIAvgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.AQIAvg[i]<150){
            AQIAvgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.AQIAvg[i]<200){
            AQIAvgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.AQIAvg[i]<300){
            AQIAvgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.AQIAvg[i]<400){
            AQIAvgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.AQIAvg[i]<500){
            AQIAvgcolors[i]='#3E0023';
        } 
    }

    let nh3Avgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.nh3Avg.length; i++){
        if(GraphApp.GraphReducer.nh3Avg[i]<200){
            nh3Avgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.nh3Avg[i]<400){
            nh3Avgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.nh3Avg[i]<800){
            nh3Avgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.nh3Avg[i]<1200){
            nh3Avgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.nh3Avg[i]<1800){
            nh3Avgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.nh3Avg[i]<2000){
            nh3Avgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.nh3Avg[i]>2000){
            nh3Avgcolors[i]='#3E0023';
        } 
    }

    let coAvgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.coAvg.length; i++){
        if(GraphApp.GraphReducer.coAvg[i]<4.4){
            coAvgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.coAvg[i]<9.4){
            coAvgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.coAvg[i]<12.4){
            coAvgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.coAvg[i]<15.4){
            coAvgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.coAvg[i]<30.4){
            coAvgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.coAvg[i]<40.4){
            coAvgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.coAvg[i]>40.4){
            coAvgcolors[i]='#3E0023';
        } 
    }

    let no2Avgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.no2Avg.length; i++){
        if(GraphApp.GraphReducer.no2Avg[i]<0.053){
            no2Avgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.no2Avg[i]<0.1){
            no2Avgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.no2Avg[i]<0.36){
            no2Avgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.no2Avg[i]<0.65){
            no2Avgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.no2Avg[i]<1.24){
            no2Avgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.no2Avg[i]<1.64){
            no2Avgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.no2Avg[i]>1.64){
            no2Avgcolors[i]='#3E0023';
        } 
    }

    let ch4Avgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.ch4Avg.length; i++){
        if(GraphApp.GraphReducer.ch4Avg[i]<50){
            ch4Avgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.ch4Avg[i]<100){
            ch4Avgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.ch4Avg[i]<150){
            ch4Avgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.ch4Avg[i]<200){
            ch4Avgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.ch4Avg[i]<300){
            ch4Avgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.ch4Avg[i]<400){
            ch4Avgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.ch4Avg[i]>400){
            ch4Avgcolors[i]='#3E0023';
        } 
    }

    let co2Avgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.co2Avg.length; i++){
        if(GraphApp.GraphReducer.co2Avg[i]<1000){
            co2Avgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.co2Avg[i]<2000){
            co2Avgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.co2Avg[i]<5000){
            co2Avgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.co2Avg[i]<10000){
            co2Avgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.co2Avg[i]<20000){
            co2Avgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.co2Avg[i]<40000){
            co2Avgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.co2Avg[i]>40000){
            co2Avgcolors[i]='#3E0023';
        } 
    }

    let dustAvgcolors= [];
    for(let i=0; i<GraphApp.GraphReducer.dustAvg.length; i++){
        if(GraphApp.GraphReducer.dustAvg[i]<12){
            dustAvgcolors[i]='#00E000';
        } else if(GraphApp.GraphReducer.dustAvg[i]<35.4){
            dustAvgcolors[i]='#FFFF00';
        } else if(GraphApp.GraphReducer.dustAvg[i]<55.4){
            dustAvgcolors[i]='#FF7600';
        } else if(GraphApp.GraphReducer.dustAvg[i]<150.4){
            dustAvgcolors[i]='#FF0000';
        } else if(GraphApp.GraphReducer.dustAvg[i]<250.4){
            dustAvgcolors[i]='#990049';
        } else if(GraphApp.GraphReducer.dustAvg[i]<350.4){
            dustAvgcolors[i]='#7E0023';
        } else if(GraphApp.GraphReducer.dustAvg[i]>350.4){
            dustAvgcolors[i]='#3E0023';
        } 
    }

    // let humitidyAvgcolors= [];
    // for(let i=0; i<GraphApp.GraphReducer.humitidyAvg.length; i++){
    //     if(GraphApp.GraphReducer.humitidyAvg[i]<12){
    //         humitidyAvgcolors[i]='#00E000';
    //     } else if(GraphApp.GraphReducer.humitidyAvg[i]<35.4){
    //         humitidyAvgcolors[i]='#FFFF00';
    //     } else if(GraphApp.GraphReducer.humitidyAvg[i]<55.4){
    //         humitidyAvgcolors[i]='#FF7600';
    //     } else if(GraphApp.GraphReducer.humitidyAvg[i]<150.4){
    //         humitidyAvgcolors[i]='#FF0000';
    //     } else if(GraphApp.GraphReducer.humitidyAvg[i]<250.4){
    //         humitidyAvgcolors[i]='#990049';
    //     } else if(GraphApp.GraphReducer.humitidyAvg[i]<350.4){
    //         humitidyAvgcolors[i]='#7E0023';
    //     } else if(GraphApp.GraphReducer.humitidyAvg[i]>350.4){
    //         humitidyAvgcolors[i]='#3E0023';
    //     } 
    // }

    return {
        nh3Avg: GraphApp.GraphReducer.nh3Avg,
        coAvg: GraphApp.GraphReducer.coAvg,
        no2Avg: GraphApp.GraphReducer.no2Avg,
        ch4Avg: GraphApp.GraphReducer.ch4Avg,
        co2Avg: GraphApp.GraphReducer.co2Avg,
        dustAvg: GraphApp.GraphReducer.dustAvg,
        humitidyAvg: GraphApp.GraphReducer.humitidyAvg,
        temperatureAvg: GraphApp.GraphReducer.temperatureAvg,
        dates: GraphApp.GraphReducer.dates,
        AQIAvg: GraphApp.GraphReducer.AQIAvg,
        AQIAvgColor: AQIAvgcolors,
        nh3AvgColor: nh3Avgcolors,
        coAvgColor: coAvgcolors,
        no2AvgColor: no2Avgcolors,
        ch4AvgColor: ch4Avgcolors,
        co2AvgColor: co2Avgcolors,
        dustAvgColor: dustAvgcolors



    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
