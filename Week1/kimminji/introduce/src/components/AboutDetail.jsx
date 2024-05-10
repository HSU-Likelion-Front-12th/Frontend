import styled from 'styled-components';

const Container = styled.div`   
    width: 65vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-contet: center;
    align-items:center;
`;
const Info = styled.div`
    width: 11vw;
    height: 30vh;
    margin-left: 5rem;
    margin-top: 5rem;
    margin-right: 5rem;
`;
const P = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: normal;

`;
const Span = styled.span` 
    color: #626682;
    font-family: Inter;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
`;
function AboutDetails(){
    return(
        <Container>
            <Info> 
            <P> EDUCATION</P>
                    <Span> 한성대 컴퓨터공학부 <br/> 2021.03 - 2025.02</Span>
            </Info>
            <Info><P> SKILLS</P>
                    <Span> C/C++ <br/> Swift <br/> Java </Span></Info>
            <Info><P> WORK</P>
                    <Span>프론트엔드 개발자</Span></Info>
            <Info><P> ACTIVITIES</P>
                    <Span>멋쟁이사자처럼 12기</Span></Info>
        </Container>
    );
}

export default AboutDetails;