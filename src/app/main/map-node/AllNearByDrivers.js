import React from 'react';
import {compose} from 'recompose';
import classNames from 'classnames';
// Material UI
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Divider}  from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import withWidth from '@material-ui/core/withWidth';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

// import markers from './maps.json';
import themeStyles from './maps.theme.style';
import scss from './maps.module.scss';

class AllNearByDrivers extends React.Component {

    getIconColor = status => {
        if (status === "offline"){
            return "#ed1c24";
        } else if (status === "online") {
            return "#61c250";
        } else {
            return "black";
        }
    }

    render() {
        const {classes, markers, activeMarker, onMarkerClick} = this.props;

        return (
            <div className={scss['portal-map-page-wrapper']}>
                <Grid
                    container
                    spacing={2}
                    className={scss['portal-map-cards']}
                    // alignItems="stretch"
                    direction="column"
                    // justify="space-around"
                    style={{width: '30%'}}
                >
                    <Grid item xs={12} sm={12} md={12} style={{flexBasis: 'unset'}}>
                        <Paper elevation={4}>
                            {markers.length ?
                                <List className={classNames(scss['portal-map-card-list'], 'portal-hide-scrollbars')}>
                                    {markers.map(marker => (
                                        <ListItem onClick={onMarkerClick(marker)} key={marker.user_id}>
                                            <ListItemAvatar>
                                                <Avatar alt={marker.first_name + " " + marker.last_name}
                                                        src={`${process.env.REACT_APP_PUBLIC_URL}/${marker.profile_pic}`}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={`${marker.first_name} ${marker.last_name}`}
                                                secondary={`${marker.service_name} - ${marker.car_type} ${marker.car_model} (${marker.car_number})`}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    aria-label={marker.status}
                                                    style={{color: this.getIconColor(marker.status)}}
                                                >
                                                    <PersonPinCircleIcon/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                                :
                                <Typography color="inherit" align="center" variant="subtitle1" style={{
                                    height: 220,
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    No drivers available in this area...
                                </Typography>}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{flexBasis: 'unset'}} justify="center" >
                        <Paper
                            elevation={4}
                            className={classNames(
                                scss['portal-maps-contact-detail-card'],
                                classes['portal-maps-contact-detail-card'],
                                'portal-hide-scrollbars'
                            )}
                        >
                            {activeMarker ?
                                <div style={{textAlign: "center"}}>
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <Avatar alt={activeMarker.first_name + " " + activeMarker.last_name}
                                                src={`${process.env.REACT_APP_PUBLIC_URL}/${activeMarker.profile_pic}`}/>
                                    </div>
                                    <Typography variant="h6" color="inherit" align="center">
                                        {activeMarker.first_name} {activeMarker.last_name} <br />
                                    </Typography>
                                    <Typography variant="caption" color="inherit" align="center" gutterBottom>
                                        {`${activeMarker.service_name} - ${activeMarker.car_type} ${activeMarker.car_model} (${activeMarker.car_number})`}
                                    </Typography>
                                    <Typography align="center" color="inherit">
                                        STATUS: {activeMarker.status}
                                    </Typography>
                                    <Divider variant="middle" style={{marginTop: 5, marginBottom: 5}} />
                                    <Typography align="center" color="inherit">
                                        Mobile Number: {activeMarker.mobile_number}
                                    </Typography>
                                    <Typography align="center" color="inherit">
                                        CNIC Number: {activeMarker.cnic}
                                    </Typography>
                                    <Typography align="center" color="inherit">
                                        Priority: {activeMarker.priority === 1 ? "High" : "Low"}
                                    </Typography>
                                    <Typography align="center" color="inherit">
                                        Rating: {activeMarker.rating}
                                    </Typography>
                                </div>
                                :
                                <div>
                                    <div className={classNames(
                                        scss['portal-maps-contact-detail-card__pin'],
                                        classes['portal-maps-contact-detail-card__pin']
                                    )}
                                    />
                                    <div className={classNames(
                                        scss['portal-maps-contact-detail-card__pulse'],
                                        classes['portal-maps-contact-detail-card__pulse']
                                    )}
                                    />
                                    <Typography color="inherit"
                                                className={scss['portal-maps-contact-detail-card__explainer']}>
                                        Click on one of the map markers or the avatars above in order to view that
                                        driver&apos;s details.
                                    </Typography>
                                </div>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default compose(withWidth(), withStyles(themeStyles, {withTheme: true}))(AllNearByDrivers);