import React from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import axios from "axios";
import {Base_URL} from "../../server";

function renderInputComponent(inputProps) {
    const {
        classes, inputRef = () => {
        }, ref, ...other
    } = inputProps;

    return (
        <TextField
            fullWidth
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
            variant="outlined"
            margin="dense"
            type="number"
            required
        />
    );
}

function renderSuggestion(suggestion) {

    return (
        <MenuItem key={suggestion.id} component="div" style={{minHeight: 37}} dense>
            <span>
                {suggestion.mobile_number}
            </span>
        </MenuItem>
    );
}

function getSuggestionValue(suggestion) {
    return suggestion.mobile_number;
}

const styles = (theme => ({
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 10,
        marginTop: 0,
        left: 0,
        right: 0,
        overflow: 'auto',
        height: 160
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    }
}));

class SearchAppUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };
    }

    handleSuggestionsFetchRequested = ({value}) => {
        if (value.length > 2) {
            axios.get(`${Base_URL}user/app-user/get-app-users-by-mobile/${value}`)
                .then(response => {
                    this.setState({suggestions: response.data})
                })
        } else {
            this.setState({
                suggestions: []
            });
        }
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    handleChange = (event, {newValue, method}) => {
        this.setState({
            value: newValue,
        });
    };

    resetAppUsers = () => {
        this.setState({
            value: '',
            suggestions: []
        })
    };

    render() {
        const { classes, onSuggestionSelected } = this.props
        const { value, suggestions } = this.state;
        const autosuggestProps = {
            renderInputComponent,
            suggestions: suggestions,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            onSuggestionSelected,
            getSuggestionValue,
            renderSuggestion,
        };
        return (
            <Autosuggest
                {...autosuggestProps}
                inputProps={{
                    classes,
                    id: 'app-users-autosuggest',
                    label: 'App User',
                    placeholder: 'Search a app user (by mobile number)',
                    value: value,
                    onChange: this.handleChange,
                }}
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderSuggestionsContainer={options => (
                    <Paper {...options.containerProps} square>
                        {options.children}
                    </Paper>
                )}
            />
        );
    }
}

export default withStyles(styles, { withTheme: true }) (SearchAppUsers);