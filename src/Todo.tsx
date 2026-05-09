import { useState, type Dispatch, type SetStateAction } from "react";
import { type SingleToDo } from "./App";
import { ButtonStyled, ToDoRowTitle, ToDoRowDescription, RowToDo } from "./Form.elements";

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
    <RowToDo>
      <div>
        <ToDoRowTitle
          className={singleToDo.state === "Started" ? "started" : "notStarted"}
          onClick={() => setShowDescription(!showDescription)}
        >
          {singleToDo.title}
        </ToDoRowTitle>
        {showDescription && <ToDoRowDescription>{singleToDo.description}</ToDoRowDescription>}
      </div>
      <div>
        <ButtonStyled onClick={handleToggleState}>{singleToDo.state}</ButtonStyled>
        <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
      </div>
    </RowToDo>
  );
}

export default Todo;
