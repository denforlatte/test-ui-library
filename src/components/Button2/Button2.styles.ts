import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  height: 20px;
  width: 200px;

  &:focus {
    border: 2px solid blue;
  }
`;

export default {
  Button,
};
