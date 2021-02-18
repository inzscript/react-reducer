import React, { useState } from 'react';
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

// Component - 
function CounterV1() {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
    };
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className={classes.root}>
            <h2>Basic Counter</h2>
            <IconButton aria-label="decremenbt" onClick={decrement}>
                <RemoveCircleOutlineIcon />
            </IconButton>
            <span> {count} </span>
            <IconButton aria-label="Increment" onClick={increment}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    )
}

export default CounterV1
