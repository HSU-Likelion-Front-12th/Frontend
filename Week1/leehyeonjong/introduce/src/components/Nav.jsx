import styled from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <Span>ABOUT</Span>
      <Span>HOBBY</Span>
      <Span>CONTACT</Span>
    </NavContainer>
  );
}
export default Nav;

const NavContainer = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 17vw;
  display: inline-flex;
  align-items: flex-start;
  gap: 32px;
`;

const Span = styled.span`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
