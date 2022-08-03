import styled from 'styled-components';

//  COMPS
export const Kingdom = styled.section`
  /* color: #c4c2b7; */
  color: #000000;
  font-family: 'Helvetica', 'Arial', sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

  // Text
  font-size: 16px;
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }

  a:link {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
    color: #000000;
  }
  
  a:hover {
    text-decoration: none;
    weight: bold;
  }
  
  a:active {
    text-decoration: none;
    weight: bold;
  }
`;

//  General

export const Head = styled.section`
  padding-top: 9vh;
  font-size: calc(10px + 2vmin);
`;

export const Body = styled.section`
  padding-top: 9vh;
`;
