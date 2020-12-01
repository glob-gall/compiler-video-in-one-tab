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

    color: #303030;
    font-size: 18px;
    text-decoration: none;

    transition: 0.1s;
  }
  a:hover {
    transform: scale(1.05);
    color: #505050;
  }
  svg {
    margin-right: 4px;
  }
`
