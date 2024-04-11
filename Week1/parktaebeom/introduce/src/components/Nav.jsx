import styled from "styled-components";
import img from "../images/title.png";
const NavContainer = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
`;

const NavUl = styled.nav`
  list-style-type: none;
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-around;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  color: #000;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Img = styled.img`
  width: 270px;
  height: 60px;
`;

function Nav() {
  return (
    <NavContainer>
      <NavUl>
        <li id="portfolio">
          <A href="#">
            <Img src={img} />
          </A>
        </li>
        <li></li>
        <li></li>
        <li>
          <A href="#">ABOUT</A>
        </li>
        <li>
          <A href="#">HOBBY</A>
        </li>
        <li>
          <A href="#">CONTACT</A>
        </li>
      </NavUl>
    </NavContainer>
  );
}

export default Nav;
