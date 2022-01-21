import React, {Component} from "react";
import {FusePageSimple} from "@fuse";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import withReducer from "app/store/withReducer";
import DispatchData from "./DispatchData";
import DispatchHeader from "./DispatchHeader";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import "./style.css";

class DispatchApp extends Component {

    componentDidMount() {
        this.props.getAllServices();
    }

    render() {
        return (
            <React.Fragment>
                <FusePageSimple
                    header={<DispatchHeader pageLayout={() => this.pageLayout}/>}
                    content={<DispatchData/>}
                    sidebarInner
                    onRef={(instance) => {
                        this.pageLayout = instance;
                    }}
                    innerScroll={false}
                />
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAllServices: Actions.getAllServices
        },
        dispatch
    );
}

function mapStateToProps({DispatchApp}) {
    return {
        user: DispatchApp.user,
    };
}

export default withReducer(
    "DispatchApp",
    reducer
)(
    withRouter(connect(mapStateToProps, mapDispatchToProps)(DispatchApp))
);
