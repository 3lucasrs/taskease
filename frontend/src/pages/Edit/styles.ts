import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.gray2};
  padding: 15px;
  border-radius: 12px;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FormSingle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const LabelComponent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 40px;
  padding: 10px;
  background: ${(props) => props.theme.gray3};
  color: ${(props) => props.theme.text_gray2};
  border-radius: 5px;
  border: none;
  outline: none;
  &:disabled {
    opacity: 0.5;
  }
  &::placeholder {
    color: ${(props) => props.theme.text_gray2};
  }
`;

export const Select = styled.select`
  height: 40px;
  padding: 10px;
  background-color: ${(props) => props.theme.gray3};
  color: ${(props) => props.theme.text_gray2};
  border: none;
  outline: none;
  border-radius: 5px;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  cursor: pointer;
`;

export const ButtonTrash = styled(Button)`
  background-color: ${(props) => props.theme.error};
`;

export const TrashIcon = styled(FaRegTrashAlt)`
  color: ${(props) => props.theme.gray1};
`;
