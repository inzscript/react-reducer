import React from 'react';
import { ACTIONS } from './Todo';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function TodoList({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>
            {/* <IconButton aria-label="Toggle Todo Item" onClick={() => 
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>
                    <RemoveCircleOutlineIcon />
            </IconButton> */}
            <button onClick={() => 
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>
                    Toggle
            </button>
            <button onClick={() => 
                dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>
                    Delete
            </button>
        </div>
    )
}

export default TodoList
