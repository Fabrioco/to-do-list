import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Todo list</h1>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">ADICIONAR</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default App;
