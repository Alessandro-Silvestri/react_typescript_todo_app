import { useState } from "react";
import Todo from './Todo';

interface ToDos {
  id: string;
  title: string;
  description: string;
  state: string;
}

function Form({ toDos, setToDos }) {
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
    <form onSubmit={(e) => e.preventDefault()}>
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
    </form>
  );
}

export default Form;
