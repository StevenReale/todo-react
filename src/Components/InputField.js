import React from 'react';

export default function InputField({inputValue, setInputValue, addTask}){
    return(
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </>
    );
}