import { useState, type Dispatch, type SetStateAction } from "react";
import { type SingleToDo } from "./App";
import {
  FormStyled,
  FormLabelStyled,
  ButtonStyled,
  TextAreaStyled,
  InputTypeText,
} from "./Form.elements";

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

function Form({ toDos, setToDos }: FormProps) {
  const [toDoDescription, setToDoDescription] = useState("");
  const [toDoTitle, setToDoTitle] = useState("");

  function handleAddTodo(): void {
    // edge case: empty field
    if (toDoDescription === "" || toDoTitle === "") {
      alert("Wrong input");
      return;
    }

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
      <FormLabelStyled>To Do input:</FormLabelStyled>
      <InputTypeText
        type="text"
        placeholder="To do Title"
        value={toDoTitle}
        onChange={(e) => setToDoTitle(e.target.value)}
      />
      <ButtonStyled
        onClick={() => {
          handleAddTodo();
          setToDoTitle("");
          setToDoDescription("");
        }}
      >
        Add
      </ButtonStyled>
      <br />
      <TextAreaStyled
        name=""
        id=""
        placeholder="Description"
        value={toDoDescription}
        onChange={(e) => {
          setToDoDescription(e.target.value);
        }}
      ></TextAreaStyled>
    </FormStyled>
  );
}

export default Form;
