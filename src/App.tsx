import "./styles.css";
import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

// style
import { createGlobalStyle, styled } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body{
    background: #0e0c28;
    /* background: white; */
    color: white;
  }
`;


export interface SingleToDo {
  id: string;
  title: string;
  description: string;
  state: string;
}

function App() {
  const [toDos, setToDos] = useState<SingleToDo[]>([]);
  return (
    <>
      <GlobalStyle />
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
    </>
  );
}

export default App;
