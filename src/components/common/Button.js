import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullwidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}

    &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${(props) =>
    props.grey &&
    css`
      background: ${palette.gray[1]};
      color: ${palette.gray[12]};
      &:hover {
        background: ${palette.gray[2]};
      }
    `}

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
