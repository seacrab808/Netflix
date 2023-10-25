import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BgImg,
  Help,
  Input,
  Logo,
  SubDes,
  Title,
  Wrap,
  Wrapper,
  Switcher,
  Form,
} from "./style/signLog";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNav = () => {
    navigate("/");
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isLoading || email === "" || password === "") return;

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log(email, password);
  };

  return (
    <>
      <Logo onClick={onNav} />
      <BgImg />
      <Wrapper>
        <Title>로그인</Title>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            value={email}
            name="email"
            required
            placeholder="이메일 주소"
            type="text"
          ></Input>
          <Input
            onChange={onChange}
            value={password}
            name="password"
            required
            placeholder="비밀번호"
            type="password"
          ></Input>
          <Input
            type="submit"
            value={isLoading ? "Loading..." : "로그인"}
          ></Input>
          <Help>도움이 필요하신가요?</Help>
        </Form>
        <Wrap>
          <Switcher>
            Netfilx 회원이 아닌가요?{" "}
            <p>
              <Link to="/sign-in">지금 가입하세요.</Link>
            </p>
          </Switcher>
          <SubDes>
            이 페이지는 Google reCAPRCHA의 보호를 받아
            <br /> 사용자가 로봇이 아님을 확인합니다.
            <p>자세히 알아보기</p>
          </SubDes>
        </Wrap>
      </Wrapper>
    </>
  );
};

export default Login;
