import About from "./About";
import Hobby from "./Hobby";
import styled from "styled-components";
function Section2() {
  return (
    <>
      <SectionFrame>
        <About />
        <Hobby />
      </SectionFrame>
    </>
  );
}

export default Section2;

const SectionFrame = styled.div`
  width: 100%;
  height: 1700px;
  background: #f3f5ff;
`;
