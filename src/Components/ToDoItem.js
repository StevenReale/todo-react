import React from 'react';

export default function ToDoItem({task, index, toggleComplete, deleteTask}) {
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            {task.text}
            <button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
    );
}