import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap");
  font-family: Mulish, sans-serif;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 85%;
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1100px;
  margin-top: 128px;
  margin-left: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  color: #ffffff;
  width: 100px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
`;
