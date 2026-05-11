import "./styles.css";
import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { InternalContainer } from "./Form.elements";
// style
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  bgInputs: "#333333",
};

const GlobalStyle = createGlobalStyle`
  body{
    padding: 20px;
    background: #1a1a1a;
    color: white;
    font-family: "Roboto", "Open Sans", sans-serif;
  }
  /* div {
    border: 1px solid green;
  } */
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Form toDos={toDos} setToDos={setToDos} />
        <InternalContainer>
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
        </InternalContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
