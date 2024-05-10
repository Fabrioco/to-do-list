import { useState, useEffect } from "react";

export const Tasks = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("tarefas") || "[]");
    setTodo(storedItem);
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      const newItem = value.trim();
      setTodo([...todo, newItem]);
      setValue("");
      localStorage.setItem("tarefas", JSON.stringify([...todo, newItem]));
    }
  };

  const handleRemove = (index) => {
    const newItems = [...todo];
    newItems.splice(index, 1);
    setTodo(newItems);

    localStorage.setItem("tarefas", JSON.stringify(newItems));
  };

  const handleEdit = (index, newText) => {
    setDisabled(false);
    const newItems = [...todo];
    newItems[index] = newText;
    setTodo(newItems);
    localStorage.setItem("tarefas", JSON.stringify(newItems));
  };

  return (
    <div className="container">
      <h1>Todo list</h1>
      <form onSubmit={handleAddTask}>
        <input
          className="inpt__task"
          type="text"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">SALVAR</button>
      </form>
      <div className="container_list">
        {todo.map((item, index) => (
          <div key={index} className="list_tasks">
            <input type="checkbox" />
            <input
              type="text"
              value={item}
              onChange={(e) => handleEdit(index, e.target.value)}
              disabled={disabled}
            />
            <button onClick={() => setDisabled(!disabled)}>Editar</button>
            <button onClick={() => handleRemove(index)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};
