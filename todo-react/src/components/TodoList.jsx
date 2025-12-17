import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todos && todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }
        </div>
    )
}

export default TodoList