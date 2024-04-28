import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 0 20px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.gray2};
  border-radius: 8px;
`;

export const Input = styled.input`
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
  outline: none;
  background: ${(props) => props.theme.gray3};
  border: none;
  color: ${(props) => props.theme.text_gray2};
  border-radius: 8px;
  font-size: 18px;
  padding: 0 15px;

  &::placeholder {
    color: ${(props) => props.theme.text_gray2};
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 10px;
  font-size: 24px;
  font-weight: 500;
`;
