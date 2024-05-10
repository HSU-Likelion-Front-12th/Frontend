import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100vw;
    height: 70vh;
    border: 1px solid #000;
    background: #4A86FF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `;
const P = styled.p`
    width: 100vw;
    height: 30vh;
    color: #FFF;
    display: flex;
    justify-content: center;
    align=items: center;
    text-align: center;
    font-family: Inter;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem; 
`;
function Introduce(){
    return (
        <Container>
            <P>
                안녕하세요!<br/>
                제 이름은 김민지입니다.<br/>
                소통하는 개발자가 되고 싶어요.
            </P>
        </Container>
        
    );
}

export default Introduce;