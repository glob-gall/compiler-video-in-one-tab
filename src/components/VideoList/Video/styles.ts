import styled from "styled-components"
import { ResizableBox } from "react-resizable"

export const Container = styled(ResizableBox)`
  display: flex;
  flex-direction: column;

  position: relative;
  span {
    position: absolute;
    width: 100%;
    height: 4px;
    background: #eee;
    cursor: s-resize;

    bottom: -4px;
    transition: height 0.2s;
    &:hover {
      height: 24px;
    }
  }
  & + & {
    margin-top: 4px;
  }
`

export const AnimatedVideo = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

export const HeaderVideo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid #30303050;
  background: #303030;
  position: relative;
`

export const XButton = styled.button`
  z-index: 999;
  display: flex;
  position: absolute;
  right: 0px;
  bottom: -18px;

  background: #db3a3a;
  border: none;
  border-radius: 4px;

  padding: 8px 12px;
  margin-left: auto;
  margin-right: 18px;

  transition: 0.2s;
  svg {
    transition: 0.2s;
  }
  &:hover {
    transform: scale(1.1);
    svg {
      transform: scale(1.1);
    }
  }
`

export const Resize = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  cursor: s-resize;
  svg {
    background: #f2f2f2;
    padding: 2px;
    border-radius: 50%;
    transition: 0.2s;
  }

  &:hover {
    background: #c4c4c4;
    svg {
      background: #c4c4c4;
    }
  }
`
