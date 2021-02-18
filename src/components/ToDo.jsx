import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

// Use global variables instead of hard coded values to limit typo errors.
const ACTIONS = {

}

// Uses useState hooks to track the value of the counter state with the 
// dispatch call instead of callbacks. 
function reducer (state, action) {

}

// Functional Component: CounterV2
// Reference React hook api for details: 
// https://reactjs.org/docs/hooks-reference.html#usereducer
function ToDo() {
    const classes = useStyles();
    // Specifying the intial useReducer state for count value.
    const initialState = [];
    const [todos, dispatch] = useReducer( reducer, initialState );

    return (
       <div className={classes.root}>

        </div>
    )
}

export default ToDo
