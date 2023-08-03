import React, { useState } from "react";
import InputField from "./Components/InputField";
import "./Components/style.css";
import { ToDo } from "./Components/model";
import ToDoList from "./Components/ToDoList";
const App = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  let Handler = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo("");
    }
    console.log(toDos);
  };
  return (
    <div className="heading">
      <span className="heading_name">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} Handler={Handler} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
