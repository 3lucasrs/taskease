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

export const FilterButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
