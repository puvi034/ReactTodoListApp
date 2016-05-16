/**
 * Created by Puneeth T S on 5/14/16.
 */

import React from 'react';

const Todo = ({onClick,text,completed})=> {

    return (
        <li onClick={onClick} style={{textDecoration:(completed)?'line-through':'none'}}>

            {text}

        </li>
    )
}

Todo.protoTypes = {
    onClick: React.PropTypes.func.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
}

export default Todo;
