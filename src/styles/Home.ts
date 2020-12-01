import styled from "styled-components"
import { lighten } from "polished"

export const Container = styled.div`
  min-height: 100vh;
  background: #303030;
  display:flex;
  flex-direction:column;
`
export const Header = styled.div`
  width: 100%;
  height: 54px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f2f2f2;
`

export const InputContainer = styled.form`
  display: flex;
  height: 32px;
  background: #fff;

  border: 2px solid #931bf1;
  border-radius: 4px;
  margin: auto;

  transition: 0.2s;
  &:hover {
    border-color: ${lighten(0.1, "#931BF1")};
    transform: scale(1.005);

    button {
      background: ${lighten(0.1, "#931BF1")};
      border-left-color: ${lighten(0.1, "#931BF1")};
    }
  }

  input {
    background: #fff;
    border: none;
    font-size: 16px;
    padding: 8px 12px 7px 8px;
    width: 50vw;
  }
  button {
    background: #931bf1;
    border: none;
    border-left: 2px solid #931bf1;

    transition: 0.2s;
    padding: 4px 16px;

    &:hover {
      border-radius: 4px;
      transform: scale(1.2);
    }
  }
`
