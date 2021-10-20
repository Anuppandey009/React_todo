import { useState } from "react";

import "./todo.css";

function ToDo() {
  const [text, setText] = useState("");
  //Now we need a list to get todos

  const [todos, setToDos] = useState([]);

  const handleChange = (e) => {
    console.log("Input box changed");
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    setToDos([...todos, text]); //spread operator
    setText(""); //This thing make clear
    //console.log(text);
  };
  return (
    <div>
      <input
        id="inpbox"
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Enter your Todo"
      />
      <button id="btn" onClick={handleAddTodo}>
        Add Todo
      </button>
      {todos.map((e) => (
        <div id="inp">{e}</div>
      ))}
    </div>
  );
}

export { ToDo };
