import React, {Component} from 'react';
import {Icon, IconButton, Snackbar, SnackbarContent, withStyles} from '@material-ui/core';
import {amber, blue, green} from '@material-ui/core/colors';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as Actions from 'app/store/actions';

const styles = theme => ({
    root: {},
    success: {
        backgroundColor: green[600],
        color: '#ffffff'
    },
    error: {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.getContrastText(theme.palette.error.dark)
    },
    info: {
        backgroundColor: blue[600],
        color: '#ffffff'
    },
    warning: {
        backgroundColor: amber[600],
        color: '#ffffff'
    }
});

const variantIcon = {
    success: "check_circle",
    warning: "warning",
    error: "error_outline",
    info: "info"
};

class FuseMessage extends Component {
    render() {
        const {classes, options} = this.props;
        return (
            <Snackbar
                {...options}
                open={this.props.state}
                onClose={this.props.hideMessage}
                classes={{
                    root: classes.root
                }}
                ContentProps={{
                    variant: 'body2',
                    headlineMapping: {
                        body1: 'div',
                        body2: 'div'
                    }
                }}
            >
                <SnackbarContent
                    className={classNames(classes[options.variant])}
                    message={
                        <div className="flex items-center">
                            {variantIcon[options.variant] && (
                                <Icon className="mr-8" color="inherit">{variantIcon[options.variant]}</Icon>
                            )}
                            {options.message}
                        </div>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.props.hideMessage}
                        >
                            <Icon>close</Icon>
                        </IconButton>
                    ]}
                />
            </Snackbar>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideMessage: Actions.hideMessage
    }, dispatch);
}

function mapStateToProps({fuse}) {
    return {
        state: fuse.message.state,
        options: fuse.message.options
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FuseMessage));
