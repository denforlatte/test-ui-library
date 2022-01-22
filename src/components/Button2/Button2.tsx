import React from "react";
import Styled from "./Button2.styles";

export interface Button2Props {
  /**
   * What does the button say?
   */
  label: string;
}

const Button2 = (props: Button2Props) => {
  return <Styled.Button>{props.label}</Styled.Button>;
};

export default Button2;
