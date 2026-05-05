import { useState, type Dispatch, type SetStateAction } from "react";
import { type SingleToDo } from "./App";
import styled from "styled-components";

// style
const FormStyled = styled.form`
  max-width: 480px;
  .form-label{
    font-weight: bold;
  }
`

interface ToDos {
  id: string;
  title: string;
  description: string;
  state: string;
}

interface FormProps {
  toDos: SingleToDo[];
  setToDos: Dispatch<SetStateAction<ToDos[]>>;
}

function Form({ toDos, setToDos }:FormProps) {
  const [toDoDescription, setToDoDescription] = useState("");
  const [toDoTitle, setToDoTitle] = useState("");
  function handleAddTodo() {
    setToDos([
      ...toDos,
      {
        id: crypto.randomUUID(),
        title: toDoTitle,
        description: toDoDescription,
        state: "Not started",
      },
    ]);
  }

  return (
    <FormStyled onSubmit={(e) => e.preventDefault()}>
      To Do input:
      <input
        type="text"
        placeholder="To do Title"
        value={toDoTitle}
        onChange={(e) => setToDoTitle(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTodo();
          setToDoTitle("");
          setToDoDescription("");
        }}
      >
        Add
      </button>
      <br />
      <textarea
        name=""
        id=""
        placeholder="Description"
        value={toDoDescription}
        onChange={(e) => {
          setToDoDescription(e.target.value);
        }}
      ></textarea>
    </FormStyled>
  );
}

export default Form;
