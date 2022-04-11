import styled from "styled-components";

export const ListUsers = styled.div`
  display: grid;
  grid-template-columns: 20% 10% 10% 20% 10% 10%;
  border-top: 1px #dfe0eb solid;
  gap: 45px;
`;

export const TableUsers = styled.div`
  display: grid;
  grid-template-columns: 20% 10% 10% 20% 10% 10%;
  opacity: 0.5;
  gap: 45px;
`;

export const AllUsersTitle = styled.h3`
  padding: 32px 0;
`;

export const FormNewUser = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px black dashed;
  background-color: #E5E5E5;
`;

export const DivLabelField = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const Input = styled.input`
    height: 30px;
    border-radius: 4px;
    border: 1px #E5E5E5 solid;
`

export const DivButtons = styled.div`
  display: flex;
`;