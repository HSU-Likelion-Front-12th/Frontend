import profil from '../imgs/profil.JPG';
import styled from 'styled-components';

const ProfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 35vw;
    margin-left: 10rem;
    border-radius: 16px;
    border: 1px solid #EBEDF8;
    background: #fff;
    jusstify-content: center;
    align-items: center;
`;
const Img =  styled.img`
    width: 15vw;
    height: 24vh;
    margin-top: 1.5rem;
    border-radius: 50%;
`;
const Name =styled.p`
    min-width: 10vw;
    height: 3vh;
    color: #4A86FF;
    text-align: center;
    font-family: Inter;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1rem;
`;
const Phone = styled.div`   
    width: 20vw;
    display: flex;
    flaot: left;
    gap:1rem;
`;
const P = styled.p`
    width: 15vw;
    height: 1vh;
    text-align: left;
    left: 3rem;
    color: #484A64;
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;

`;
const Mail = styled.div`
    width: 20vw;
    display: flex;
    flaot: left;
    gap:1rem;
`;
const Map = styled.div`
    width: 20vw;
    display: flex;
    flaot: left;
    gap:1rem;
`;
function Profil(){
    return (
        <ProfilContainer> 
                <Img src={profil}/>
                <Name>김민지</Name>
                <Phone>
                    <svg id="phone" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M33.9843 27.0556C33.7436 28.9307 32.8452 30.6518 31.4569 31.8975C30.0686 33.1432 28.2854 33.8284 26.4403 33.825C15.7212 33.825 7.00001 24.8859 7.00001 13.8988C6.9967 12.0076 7.66515 10.1798 8.8805 8.75686C10.0959 7.33389 11.775 6.41305 13.6043 6.16632C14.0669 6.10842 14.5354 6.20543 14.9398 6.44285C15.3441 6.68027 15.6628 7.04537 15.8481 7.48366L18.6993 14.0081V14.0247C18.8412 14.3602 18.8998 14.7265 18.8699 15.0909C18.8399 15.4552 18.7224 15.8063 18.5279 16.1128C18.5036 16.1502 18.4779 16.1848 18.4509 16.2194L15.6402 19.6345C16.6513 21.7406 18.8006 23.9242 20.8823 24.9634L24.1683 22.0976C24.2005 22.0698 24.2343 22.0439 24.2695 22.0201C24.5683 21.8159 24.912 21.6912 25.2696 21.6574C25.6271 21.6235 25.9873 21.6816 26.3175 21.8264L26.335 21.8347L32.695 24.7558C33.1234 24.9451 33.4804 25.2714 33.7128 25.6859C33.9452 26.1005 34.0405 26.581 33.9843 27.0556Z" fill="#BFC4D8"/>
                    </svg>
                    <P> 010 3843 0863</P>
                </Phone>
                <Mail>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M32.9231 9H7.07692C6.79131 9 6.51739 9.11589 6.31542 9.32218C6.11346 9.52847 6 9.80826 6 10.1V28.8C6 29.3835 6.22692 29.9431 6.63085 30.3556C7.03477 30.7682 7.58261 31 8.15385 31H31.8462C32.4174 31 32.9652 30.7682 33.3692 30.3556C33.7731 29.9431 34 29.3835 34 28.8V10.1C34 9.80826 33.8865 9.52847 33.6846 9.32218C33.4826 9.11589 33.2087 9 32.9231 9ZM31.8462 28.8H8.15385V12.6011L19.2717 23.0112C19.4704 23.1975 19.7303 23.3009 20 23.3009C20.2697 23.3009 20.5296 23.1975 20.7283 23.0112L31.8462 12.6011V28.8Z" fill="#BFC4D8"/>
                        </svg>
                        <P> ohmygmg@hansung.ac.kr</P>
                </Mail>
                <Map>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path d="M20 5.125C16.8185 5.12863 13.7684 6.40256 11.5187 8.6673C9.26905 10.932 8.00361 14.0027 8 17.2055C8 27.5425 18.9091 35.3495 19.3741 35.6763C19.5575 35.8056 19.776 35.875 20 35.875C20.224 35.875 20.4425 35.8056 20.6259 35.6763C21.0909 35.3495 32 27.5425 32 17.2055C31.9964 14.0027 30.731 10.932 28.4813 8.6673C26.2316 6.40256 23.1815 5.12863 20 5.125ZM20 12.8126C20.863 12.8126 21.7067 13.0702 22.4243 13.5529C23.1419 14.0356 23.7012 14.7217 24.0315 15.5244C24.3617 16.3271 24.4482 17.2104 24.2798 18.0625C24.1114 18.9146 23.6958 19.6974 23.0856 20.3117C22.4753 20.9261 21.6978 21.3445 20.8513 21.514C20.0048 21.6835 19.1275 21.5965 18.3301 21.264C17.5328 20.9315 16.8513 20.3685 16.3718 19.646C15.8923 18.9236 15.6364 18.0743 15.6364 17.2055C15.6364 16.0404 16.0961 14.9231 16.9144 14.0992C17.7328 13.2754 18.8427 12.8126 20 12.8126Z" fill="#BFC4D8"/>
                        </svg>
                    <P> 서울특별시 강서구 등촌로 113 </P>
                </Map>
        </ProfilContainer>
    );
}

export default Profil;

