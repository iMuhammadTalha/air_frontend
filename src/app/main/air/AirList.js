/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import "react-table/react-table.css";

class AirList extends Component {
    state = {
        page: 0,
        pageSize: 20,
        sorted: [
            {
                id: "id",
                desc: true
            }
        ]
    };

    render() {
        const { airs, getAirsPaginationData, totalPages } = this.props;
        let data = airs;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <ReactTable
                    className="-striped -highlight border-0"
                    data={data}
                    columns={[
                        // {
                        //     Header: 'ID',
                        //     accessor: 'id',
                        //     filterable: false,
                        //     className: 'justify-center font-bold'
                        // },
                        {
                            Header: 'Time',
                            accessor: 'created_time',
                            id: 'created_time',
                            width: 150,
                            // accessor: d => {
                            //     return moment(d.created_time)
                            //         // .local()
                            //         .format("DD-MM-YYYY hh:mm:ss")
                            // },
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'CH4',
                            accessor: 'ch4',
                            filterable: false,
                            className: 'justify-center font-bold',

                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //             rowInfo.row.ch4 < 50 ? "#00E000" : rowInfo.row.ch4 < 100 ? "#FFFF00": rowInfo.row.ch4 < 150 ? "#FF7600": rowInfo.row.ch4 < 200 ? "#FF0000": rowInfo.row.ch4 < 300 ? "#990049": rowInfo.row.ch4 < 400 ? "#7E0023": rowInfo.row.ch4 > 400 ? "#3E0023" : null
                            //         }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        {
                            Header: 'CO',
                            accessor: 'co',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.co < 4.4 ? "#00E000" : rowInfo.row.co < 9.4 ? "#FFFF00": rowInfo.row.co < 12.4 ? "#FF7600": rowInfo.row.co < 15.4 ? "#FF0000": rowInfo.row.co < 30.4 ? "#990049": rowInfo.row.co < 40.4 ? "#7E0023": rowInfo.row.co > 40.4 ? "#3E0023" : null
                            //         }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        {
                            Header: 'Dust',
                            accessor: 'dust',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.dust < 12 ? "#00E000" : rowInfo.row.dust < 35.4 ? "#FFFF00": rowInfo.row.dust < 55.4 ? "#FF7600": rowInfo.row.dust < 150.4 ? "#FF0000": rowInfo.row.dust < 250.4 ? "#990049": rowInfo.row.dust < 350.4 ? "#7E0023": rowInfo.row.dust > 350.4 ? "#3E0023" : null  
                            //           }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        
                        {
                            Header: 'NH3',
                            accessor: 'nh3',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.nh3 < 200 ? "#00E000" : rowInfo.row.nh3 < 400 ? "#FFFF00": rowInfo.row.nh3 < 800 ? "#FF7600": rowInfo.row.nh3 < 1200 ? "#FF0000": rowInfo.row.nh3 < 1800 ? "#990049": rowInfo.row.nh3 < 2000 ? "#7E0023": rowInfo.row.nh3 > 2000 ? "#3E0023" : null  
                            //         }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        {
                            Header: 'NO2',
                            accessor: 'no2',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.no2 < 0.053 ? "#00E000" : rowInfo.row.no2 < 0.1 ? "#FFFF00": rowInfo.row.no2 < 0.36 ? "#FF7600": rowInfo.row.no2 < 0.65 ? "#FF0000": rowInfo.row.no2 < 1.24 ? "#990049": rowInfo.row.no2 <= 1.64 ? "#7E0023": rowInfo.row.no2 > 1.64 ? "#3E0023" : null  
                            //         }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        {
                            Header: 'CO2',
                            accessor: 'co2',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.co2 < 1000 ? "#00E000" : rowInfo.row.co2 < 2000 ? "#FFFF00": rowInfo.row.co2 < 5000 ? "#FF7600": rowInfo.row.co2 < 10000 ? "#FF0000": rowInfo.row.co2 < 20000 ? "#990049": rowInfo.row.co2 <= 40000 ? "#7E0023": rowInfo.row.co2 > 40000 ? "#3E0023" : null  
                            //           }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        {
                            Header: 'Humidity',
                            accessor: 'humidity',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Temperature',
                            accessor: 'temperature',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Node',
                            accessor: 'node_id',
                            filterable: false,
                            className: 'justify-center font-bold'
                        }
                    ]}
                    defaultPageSize={20}
                    resizable={true}
                    noDataText="No air found"
                    showPagination={true}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    pages={totalPages}
                    pageSizeOptions={[20, 25, 50, 100]}
                    pageSize={this.state.pageSize}
                    page={this.state.page}
                    sorted={this.state.sorted}
                    onPageChange={(page) => this.setState({ page: page })}
                    onPageSizeChange={(pageSize, page) => {
                        this.setState({ pageSize: pageSize, page: page });
                    }}
                    onSortedChange={(val) => {
                        this.setState({ sorted: val });
                    }}
                    manual
                    onFetchData={(state, instance) => {
                        getAirsPaginationData(
                            state.page,
                            state.pageSize,
                            state.sorted
                        );
                    }}
                />
            </FuseAnimate>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAirsPaginationData: Actions.getAirsPaginationData
        },
        dispatch
    );
}

function mapStateToProps({ AirApp }) {
    return {
        airs: AirApp.AirReducer.entities,
        totalPages: AirApp.AirReducer.pages,
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AirList)
);
