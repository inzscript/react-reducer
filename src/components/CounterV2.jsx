import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

// Use global variables instead of hard coded values to limit typo errors.
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

// Uses useState hooks to track the value of the counter state with the 
// dispatch call instead of callbacks. 
function reducer (state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1};
        case ACTIONS.DECREMENT:
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

// Functional Component: CounterV2
// Reference React hook api for details: 
// https://reactjs.org/docs/hooks-reference.html#usereducer
function CounterV2() {
    // Specifying the intial useReducer state for count value.
    const initialState = {count: 0};
    const [state, dispatch] = useReducer( reducer, initialState );
    // const [count, setCount] = useState(0);
    const classes = useStyles();

    // Use reducer action call for each type of request
    function increment () {
        dispatch({ type: ACTIONS.INCREMENT});
    };
    function decrement () {
        dispatch({ type: ACTIONS.DECREMENT});
    };

    return (
       <div className={classes.root}>
            <h2>Reducer Counter</h2>
            <IconButton aria-label="decrement" onClick={decrement}>
                <RemoveCircleOutlineIcon />
            </IconButton>
            <span> {state.count} </span>
            <IconButton aria-label="Increment" onClick={increment}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    )
}

export default CounterV2
