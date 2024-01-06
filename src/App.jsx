import React, { useState } from 'react';
import './App.css';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span
            style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add here...."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
