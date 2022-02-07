import styled from 'styled-components'

export const MobileMessageContainer = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    & {
      position: absolute;
      height: 100vh;
      width: 100%;
      background-color: rgb(0, 0, 0);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 100;
    }
  }
`
