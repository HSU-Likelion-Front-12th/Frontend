import styleed, { styled } from 'styled-components';
import volley from '../imgs/volleyball.jpeg';
import travel from '../imgs/travel.jpeg';
import movie from '../imgs/movie.jpeg';

const Div =  styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2rem;
}`;
const Hob = styled.div`
    width: 28vw;
    height: 45vh;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:2rem
`;
const P = styled.div`
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-weight: 700;
    width: 100%;
    height: 10vh;
    margin-top: -3rem;
    border-radius: 16px 16px 0px 0px;
    background: #4A86FF;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    width: 20vw;
    height: 25vh;
`;
function Hobby(){
    const MenuStyle = {
        color: "#4A86FF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "4rem",
        fontWeight: "800",
        lineHeight: "150px",
    }
    return (
        <>
        <div style={MenuStyle}> HOBBY</div> 
        <Div>
            <Hob>
                <P> 배구 경기 보기</P>
                <Img src={volley}/>
            </Hob>
            <Hob>
                <P> 여행가기</P>
                <Img src={travel}/>
                
            </Hob>
            <Hob>
                <P> 영화보기</P>
                <Img src={movie}/>
            </Hob>
        </Div>
        </>
    );
}

export default Hobby;