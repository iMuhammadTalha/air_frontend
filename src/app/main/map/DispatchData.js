import {Grid, Card, CardContent} from "@material-ui/core";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import MapWithASearchBox from "./mapComponent";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const styles = (theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    paperPadding: {
        padding: 10,
    },

    fieldMargin: {
        margin: theme.spacing(1),
    },
});

class DispatchData extends React.Component {

    render() {
        const { classes, services } = this.props;
        return (
            <div className={classes.root}>
                <Grid>
                    <Card key="map" style={{ marginTop: "10px" }}>
                        <CardContent>
                            <MapWithASearchBox services={services} />
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            // updateSettings: Actions.updateSettings,
        },
        dispatch
    );
}

function mapStateToProps({ DispatchApp }) {
    return {
        services: DispatchApp.DispatchReducer.services,
    };
}

export default withStyles(styles, { withTheme: true })(
    withRouter(connect(mapStateToProps, mapDispatchToProps)(DispatchData))
);
