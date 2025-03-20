import styled from "styled-components";
import { Link } from "react-scroll";
const UlNav = styled.ul`
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

export const Navbar = () => {
  return (
    <>
      <nav>
        <UlNav>
          <li>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          {/* <li>
            <Link activeClass="active" smooth spy to="stack">
              Stack
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li> */}
          <li>
            <Link activeClass="active" smooth spy to="sayhi">
              Say Hi
            </Link>
          </li>
        </UlNav>
      </nav>
    </>
  );
};
