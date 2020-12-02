import styled from "styled-components"

export const Container = styled.div`
  margin-top: auto;

  background: #f2f2f2;
  padding: 9px 0 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    border: 1px solid #303030;
    border-radius: 4px;
    padding: 4px;

    display: flex;
    align-items: center;

    color: #454545;
    font-size: 18px;
    text-decoration: none;

    transition: 0.1s;
    position: relative;

    overflow: hidden;
  }

  a::after {
    content: "";
    position: absolute;
    top: 0;

    background: #fffa;
    width: 24px;
    height: 74px;
    left: -54px;
    top: -21px;
    transform: rotate(45deg);
  }

  a:hover {
    transform: scale(1.02);
    color: #f2f2f2;
    background: #454545;
    &::after {
      transition: all 0.8s linear;
      left: 154px;
    }
  }

  svg {
    margin-right: 4px;
  }
`
