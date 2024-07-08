
import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText.trim() !== '') {
      setListTodo([...listTodo, inputText.trim()]);
    }
  };

  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  };

  const editListItem = (index, newText) => {
    let newListTodo = [...listTodo];
    newListTodo[index] = newText.trim();
    setListTodo(newListTodo);
  };

  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr />
          <ul className="todo-list">
            {listTodo.map((listItem, i) => (
              <Todolist
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
                editItem={editListItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
