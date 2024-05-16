import styled from "styled-components";
import sangsang from "../image/sangsangbugi.png";
const DIV = styled.div`
	width: 39vw;
	height: 85vh;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: #fff;
`;

const Header = styled.div`
	height: 8vh;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: bold;
	border-width: 0px 0px 0.3vh;
	border-color: #7a7485;
	border-style: solid;
`;

const Section = styled.section`
	display: flex;

	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 50%;
`;

const Image = styled.img`
	width: 45%;
	height: 45%;
`;

const FormDiv = styled.div`
	width: 75%;
	height: 70%;
	display: flex;

	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;
const INPUT = styled.input`
	width: 100%;
	height: 25%;

	text-align: center;
	font-family: Inter;
	font-size: 0.8rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;
export default function Main({ GotoSiginin, GoToSignup }) {
	return (
		<DIV>
			<Header>홈</Header>

			<Section>
				{/* 이미지 */}
				<Image src={sangsang} alt="대충 상상부기 이미지"></Image>
				{/* 아래 입력 폼 */}
				<FormDiv>
					<INPUT value="로그인" style={{ color: "1D1927" }} onClick={GotoSiginin}></INPUT>
					<INPUT
						style={{ background: "#0028DA", color: "FFF" }}
						onClick={GoToSignup}
						value="회원가입"
					></INPUT>
				</FormDiv>
			</Section>
		</DIV>
	);
}
