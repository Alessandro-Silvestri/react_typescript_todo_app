import { useState } from "react";

function Todo({ singleToDo, toDos, setToDos }) {
  const [rowState, setRowState] = useState(singleToDo.state);

  // if the ToDo is done I delete it from the array of objects
  // use useEffect() for avoiding the reRender
  if (rowState === "Done") {
    let currentTodos = [...toDos];
    let newTodos = currentTodos.filter((toDo) => toDo.id !== singleToDo.id);
    setToDos(newTodos);
  }
  return (
    <>
      <div className="toDoRowWrap">
        <div
          className={`RowToDo ${
            rowState === "Not started" ? "notStarted" : "started"
          }`}
        >
          {singleToDo.title}
          <select
            name=""
            id=""
            value={rowState}
            onChange={(e) => setRowState(e.target.value)}
          >
            <option value="Not started">Not started</option>
            <option value="Started">Started</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button onClick={() => alert(singleToDo.description)}>info</button>
      </div>
    </>
  );
}

export default Todo;
