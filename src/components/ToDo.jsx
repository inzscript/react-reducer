import React, { useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './TodoList';

// Use global variables instead of hard coded values to limit typo errors.
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

// Uses useState hooks to track the todoList object's state with the 
// dispatch call instead of callbacks. 
function reducer (todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newToDo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete }
                }
                return todo
            })
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

// Create Todo object with id, name, and boolean complete
function newToDo(name) {
    return { id: Date.now(), name: name, complete: false }
}

// Functional Component: Todo
function Todo() {
    // const classes = useStyles();
    // Specifying the intial useReducer state for empty todo array.
    const initialState = [];
    const [todos, dispatch] = useReducer( reducer, initialState );
    const [name, setName] = useState('');

    function handleSubmit(e) {
        // prevent page refresh
        // e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    return (
       <>
           <form onSubmit={handleSubmit}>
               <input type="text" value={name} onChange={e => setName(e.target.value)} />
           </form>
           {todos.map(todo => {
               return <TodoList key={todo.id} todo={todo} dispatch={dispatch}/>
           })}

        </>
    )
}

export default Todo
