import styled from "styled-components";

export const UlNav = styled.ul`
  float: right;

  padding: 0;
  & li {
    display: inline;

    height: 30px;
    width: 100px;

    margin-left: 30px;

    cursor: pointer;

    font-family: "Inter", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
  }
`;
