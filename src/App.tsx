import "./styles.css";
import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

interface SingleToDo {
  id: string;
  title: string;
  description: string;
  state: string;
}

interface Props {
  singleToDo: SingleToDo;
  toDos: SingleToDo[];
  setToDos: React.Dispatch<React.SetStateAction<SingleToDo[]>>;
}

function App() {
  const [toDos, setToDos] = useState<SingleToDo[]>([]);
  return (
    <div className="App">
      <div className="externalContainer">
        <Form toDos={toDos} setToDos={setToDos} />
        <div className="internalContainer">
          {toDos.map((singleToDo: SingleToDo) => {
            return (
              <Todo
                singleToDo={singleToDo}
                key={singleToDo.id}
                toDos={toDos}
                setToDos={setToDos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
