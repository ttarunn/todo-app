import "./App.css";
import React, { useState } from "react";
function App() {
  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input === "") {
      alert("Add valid todo");
    } else {
      setTodos([...todo, input]);
      setInput("");
    }
  }

  function deleteTodo(item) {
    setTodos(todo.filter((data) => data !== item));
  }

  return (
    <div id="main-container">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTodo} id="add-todo">Add Todo</button>
      <div>
        <ul>
          {todo.length > 0
            ? todo.map((item, i) => (
                <li key={i}>
                  {item}{" "}
                  <button onClick={() => deleteTodo(item)}>Delete</button>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default App;
