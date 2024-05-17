import styled from "styled-components";
import sangsang from "../image/sangsangbugi.png";
import { useState } from "react";
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
	justify-content: space-evenly;
	align-items: center;
`;

const INPUT = styled.input`
	width: 100%;
	height: 25%;
`;

export default function Signin({ GoToLoginMain, idList, sessionStorage, setLogin, setID }) {
	const [id, setId] = useState("");
	const [pass, setPass] = useState("");
	const IdHandler = (e) => {
		setId(e.target.value);
	};

	const PassHandler = (e) => {
		setPass(e.target.value);
	};

	const IdCheck = () => {
		const item = idList.filter((item) => {
			return item.id === id && item.pass === pass;
		});
		if (item.length !== 0) {
			//아이디가 실제로 존재
			//session에다가 내 아이디 넣어놓고 로그인 성공 해놓기
			sessionStorage.setItem("id", id);
			sessionStorage.setItem("pass", pass);
			setLogin(true); //true로 만들기
			setID(id);
			GoToLoginMain();
		} else {
			console.log("아이디 존재 안 함");
		}
	};
	return (
		<DIV>
			<Header>로그인</Header>
			<Section>
				{/* 이미지 */}
				<Image src={sangsang} alt="대충 상상부기 이미지"></Image>
				{/* 아래 입력 폼 */}
				<FormDiv>
					<INPUT type="text" placeholder="아이디" onChange={IdHandler}></INPUT>
					<INPUT type="password" placeholder="비밀번호" onChange={PassHandler}></INPUT>
					<INPUT
						type="submit"
						value="로그인"
						style={{ background: "#0028DA", color: "FFF" }}
						onClick={IdCheck}
					></INPUT>
				</FormDiv>
			</Section>
		</DIV>
	);
}
