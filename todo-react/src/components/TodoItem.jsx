import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

function TodoItem({ todo, onRemoveTodo, onUpdateTodo }) {

    const [editable, setEditable] = useState(false)
    const { id, content } = todo

    const [newTodo, setNewTodo] = useState(content)


    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }


    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px'
        }}>

            <div>
                {
                    editable ?
                        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                            className='todo-input' type='text' />
                        : content
                }
            </div>
            <div>
                <MdDeleteOutline className='todo-icons' onClick={removeTodo} />
                {
                    editable ?
                        <CiCircleCheck className='todo-icons' onClick={updateTodo} />
                        : <CiEdit className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default TodoItem