import { useState } from "react";
import styled from "styled-components";
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
	justify-content: space-evenly;
	align-items: center;

	height: 55%;
`;

const Button = styled.button`
	width: 85%;
	height: 12%;

	text-align: center;
	font-family: Inter;
	font-size: 0.8rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const INPUT = styled.input`
	width: 85%;
	height: 10%;
`;
export default function Change(setIdList, EMAIL, TEL, ID) {
	//비밀번호 변경은
	const [email, setEmail] = useState(EMAIL);
	const [tel, setTel] = useState(TEL);
	const [id, setId] = useState(ID);
	const [pass, setPass] = useState("");
	const [confirmpass, setConFirmPass] = useState("");

	const EmailHandler = (e) => {
		setEmail(e.target.value);
	};

	const TelHandler = (e) => {
		setTel(e.target.value);
	};
	const IdHandler = (e) => {
		setId(e.target.value);
	};

	const PassHandler = (e) => {
		setPass(e.target.value);
	};
	const ConFirmPassHandler = (e) => {
		setConFirmPass(e.target.value);
	};

	const updateId = () => {
		setIdList((prev) => {
			prev.map((item) =>
				item.id === id ? { id: id, email: email, tel: tel, pass: pass } : item
			);
		});
	};
	return (
		<DIV>
			<Header>비밀번호 변경</Header>

			<Section>
				{/* 이미지 */}
				{/* <Image src={sangsang} alt="대충 상상부기 이미지"></Image> */}
				{/* 아래 입력 폼 */}

				<INPUT
					type="email"
					placeholder="이메일 ex) abc123@naver.com"
					onChange={EmailHandler}
					value={email}
				></INPUT>
				<INPUT
					type="tel"
					placeholder="전화번호 ex) 01000000000"
					onChange={TelHandler}
					value={tel}
				></INPUT>
				<INPUT type="text" placeholder="아이디" onChange={IdHandler} value={id}></INPUT>
				<INPUT type="password" placeholder="비밀번호" onChange={PassHandler}></INPUT>
				<INPUT
					type="password"
					placeholder="비밀번호 확인"
					onChange={ConFirmPassHandler}
				></INPUT>
				<Button style={{ background: "#0028DA", color: "FFF" }} onClick={updateId}>
					비밀번호 변경
				</Button>
			</Section>
		</DIV>
	);
}
