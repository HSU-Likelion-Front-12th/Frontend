import logo from "../images/logo.png";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const LogoStyle = styled.img`
  width: 250px;
  height: fit-content;
`;

function Header() {
  return (
    <HeaderStyle>
      <LogoStyle src={logo} />
    </HeaderStyle>
  );
}

export default Header;
