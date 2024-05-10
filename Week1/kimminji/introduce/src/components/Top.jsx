import img from '../imgs/portfolio.png';
import styled from 'styled-components';
const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF;
    `;
    const Img = styled.img`
    width: 340px;
    height: fit-content;
    align-items: center;
    justify-content: center;
    margin-right: 15rem;
    `;
    const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    `;
    const Span = styled.span`
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    `;
    
function Top(){
    
    return (
        <TopContainer>
            <Img src={img}/>  
            <Div>
                <Span>ABOUT</Span>
                <Span>HOBBY</Span>
                <Span>CONTACT</Span>
            </Div>
        </TopContainer>
    );
}

export default Top;