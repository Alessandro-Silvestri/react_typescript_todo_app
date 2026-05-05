import { useState, type Dispatch, type SetStateAction } from "react";
import { type SingleToDo } from "./App";

interface Props {
  singleToDo: SingleToDo;
  toDos: SingleToDo[];
  setToDos: Dispatch<SetStateAction<SingleToDo[]>>;
}

function Todo({ singleToDo, toDos, setToDos }: Props) {
  const [showDescription, setShowDescription] = useState(false);

  function handleDelete() {
    setToDos(toDos.filter((todo) => todo.id !== singleToDo.id));
  }

function handleToggleState() {
    setToDos(
      toDos.map((todo) =>
        todo.id === singleToDo.id
          ? { ...todo, state: todo.state === "Not started" ? "Started" : "Not started" }
          : todo
      )
    );
  }

  return (
    <div className="RowToDo">
      <div className="toDoRowWrap">
        <span
          className={singleToDo.state === "Started" ? "started" : "notStarted"}
          onClick={() => setShowDescription(!showDescription)}
        >
          {singleToDo.title}
        </span>
        {showDescription && <p>{singleToDo.description}</p>}
      </div>
      <div>
        <button onClick={handleToggleState}>{singleToDo.state}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
