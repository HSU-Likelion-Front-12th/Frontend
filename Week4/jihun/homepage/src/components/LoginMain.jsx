import styled from "styled-components";
import sangsang from "../image/sangsangbugi.png";
import { useEffect, useState } from "react";
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

const Button = styled.button`
	width: 100%;
	height: 20%;

	text-align: center;
	font-family: Inter;
	font-size: 0.8rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

export default function LoginMain({
	GoToChange,
	setIdList,
	sessionStorage,
	setLogin,
	isLogin,
	GoToHome,
	setEmail,
	setID,
	setPASS,
	id,
}) {
	// 현재 세션에서 접속한 것을 갖고 오기
	useEffect(() => {
		if (!isLogin) {
			GoToHome();
		}
	});

	const logout = () => {
		setLogin(false); //일단 false를 둠으로써 현재 로그아웃 했다고 하고 session도 삭제
		sessionStorage.clear(); //다 삭제하기
		console.log("실행");
		GoToHome();
	};
	const removeId = () => {
		setIdList((prev) => {
			return prev.filter((item) => item.id !== id);
		});
		//없애고
		logout(); //로그아웃 동일시하게 적용
	};
	return (
		<DIV>
			<Header>{id}님 환영합니다</Header>

			<Section>
				{/* 이미지 */}
				<Image src={sangsang} alt="대충 상상부기 이미지"></Image>
				{/* 아래 입력 폼 */}
				<FormDiv>
					<Button style={{ background: "#FFF" }} onClick={GoToChange}>
						비밀번호 변경
					</Button>
					{/* 현재 접속하고 있는 것 없애기 */}
					<Button style={{ background: "#0028DA", color: "FFF" }} onClick={logout}>
						로그아웃
					</Button>
					{/* 현재 접속한 아이디 삭제 */}
					<Button style={{ background: "#DA0000", color: "FFF" }} onClick={removeId}>
						회원탈퇴
					</Button>
				</FormDiv>
			</Section>
		</DIV>
	);
}
