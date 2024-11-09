import React from 'react';

export default function ToDoList({tasks, toggleComplete, deleteTask}) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
                {task.text}
                <button onClick={() => toggleComplete(index)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
      </ul>
    );
}