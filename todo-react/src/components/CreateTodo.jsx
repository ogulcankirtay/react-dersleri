import React, { useState } from 'react'
import '../App.css'

function CreateTodo({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState('')
    const createTodo = () => {
        if (!newTodo) return
        const request = {
            id: Math.floor(Math.random() * 999),
            content: newTodo
        }
        onCreateTodo(request)
        setNewTodo("")
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type='text' placeholder='Enter Todo' />
            <button
                onClick={createTodo}
                className='todo-save-button' >Kaydet</button>
        </div>
    )
}

export default CreateTodo