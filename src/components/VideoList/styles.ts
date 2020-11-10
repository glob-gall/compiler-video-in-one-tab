import { animated } from 'react-spring';
import styled from 'styled-components';
export const Container = styled.div`
`;

export const ContainerVideo = styled(animated.div)`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  height:140px;
  
  iframe{
    width:100%;
    height:100%;
    border:none;
  }
`;
export const HeaderVideo = styled.div`
  width:100%;

  display:flex;
  justify-content:center;
  align-items:center;

  border-top:2px solid #30303050;
  background:#303030;
  position:relative;
`

export const XButton = styled.button`
  display:flex;
  position:absolute;
  right:0px;
  bottom:-18px;

  background:#DB3A3A;
  border:none;
  border-radius:4px;

  padding:8px 12px;
  margin-left:auto;
  margin-right:18px;

  transition:0.2s;
  svg{
    transition:0.2s;
  }
  &:hover{
    transform:scale(1.1);
    svg{
      transform:scale(1.1);
    }
  }
`