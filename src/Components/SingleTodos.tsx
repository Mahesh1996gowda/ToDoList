import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { ToDo } from "./model";
import "./style.css";
type props = {
  todo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};
const SingleTodos = ({ todo, setToDos, toDos }: props) => {
  const HandelDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };
  const[edit,setEdit]=React.useState<boolean>(false)
  const[editToDo,setEditToDo]=React.useState<string>(todo.toDo)

  return (
    <div className="singleMainDiv">
      <form className="todos_single">
        <span className="todos_single--text">{todo.toDo}</span>
        <div style={{ display: "flex" }}>
          <span className="icon"  >
            <AiFillEdit />
          </span>
          <span className="icon">
            <AiFillDelete
              onClick={() => {
                HandelDelete(todo.id);
              }}
            />{" "}
          </span>
          <span className="icon">
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodos;
