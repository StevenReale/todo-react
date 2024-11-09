import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({tasks, toggleComplete, deleteTask}) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <ToDoItem key={index} task={task} index={index} toggleComplete={toggleComplete} deleteTask={deleteTask} />
            ))}
        </ul>
    );
}