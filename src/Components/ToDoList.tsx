import React from "react";
import { ToDo } from "./model";
import SingleTodos from "./SingleTodos";


interface props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const ToDolist = ({ toDos, setToDos }: props) => {
  return (
    <div>
      { toDos?.map((todo) => {
    return <SingleTodos todo={todo} key={todo.id} setToDos={setToDos} toDos={toDos} />;
  })}
    </div>
  )
}

export default ToDolist


