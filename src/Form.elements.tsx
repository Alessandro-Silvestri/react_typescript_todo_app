import styled from "styled-components";

export const InternalContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

export const FormStyled = styled.form`
  max-width: 480px;
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #888;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const FormLabelStyled = styled.p`
  display: block;
  font-size: 12px;
  font-weight: 800;
  color: #888;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const ButtonStyled = styled.button`
  background: #111;
  color: #fff;
  border: 1px solid #888;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    background: #444;
  }
`;

export const InputTypeText = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  background: ${(props)=>{return props.theme.bgInputs}};
  color: white;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  margin-top: 15px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  outline: none;
  transition: border-color 0.2s;
  background: ${(props)=>{return props.theme.bgInputs}};
  color: white;
  font-family: "Roboto", "Open Sans", sans-serif;

  &:focus {
    border-color: #aaa;
  }
`;

export const RowToDo = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ToDoRowDescription = styled.span`
  font-size: 16px;
  padding: 5px 10px;
`;

export const ToDoRowTitle = styled(ToDoRowDescription)`
  cursor: pointer;
`;
