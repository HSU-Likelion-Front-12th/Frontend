import styled from "styled-components";
import hobby1 from "../images/hobby1.png";
import hobby2 from "../images/hobby2.png";
import hobby3 from "../images/hobby3.png";
function Hobby() {
  return (
    <>
      <Font>HOBBY</Font>
      <HobbyContainer>
        <Profile>
          <Type>음악 감상</Type>
          <Img>
            <img src={hobby1} style={hobbyStyle} />
          </Img>
        </Profile>
        <Profile>
          <Type>게임</Type>
          <Img>
            <img src={hobby2} style={hobbyStyle} />
          </Img>
        </Profile>
        <Profile>
          <Type>야외 활동</Type>
          <Img>
            <img src={hobby3} style={hobbyStyle} />
          </Img>
        </Profile>
      </HobbyContainer>
    </>
  );
}

export default Hobby;

const Font = styled.div`
  color: #4a86ff;
  text-align: center;
  font-family: Inter;
  font-size: 70px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  padding-top: 60px;
  padding-bottom: 60px;
`;
const HobbyContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Profile = styled.div`
  width: 380px;
  height: 377px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #ebedf8;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
const Type = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  background: #4a86ff;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Img = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const hobbyStyle = {
  width: "300px",
  height: "250px",
  objectFit: "cover",
};
