import styled from "styled-components";

export const Logo = styled.div`
  width: 180px;
  height: 80px;
  background-image: url("images/Logonetflix.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: 8px;
  left: 50px;
  z-index: 9;
`;

export const Wrapper = styled.div`
  width: 450px;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.65);
  position: relative;
  top: 10px;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 32px;
  padding: 65px 70px 35px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  color: #fff;
  font-size: 16px;
  margin: 0 65px 15px;
  height: 50px;
  border-radius: 5px;
  background-color: #333333;
  border: none;
  padding-left: 25px;

  &:focus {
    outline: none;
    background: #4a4a4a;
  }

  &:nth-child(3) {
    background-color: #e50914;
    margin-top: 25px;
    padding: 0;
    color: #fff;
    font-size: 17px;
  }
`;

export const Help = styled.div`
  margin: 5px 60px;
  font-size: 13px;
  color: #b3b3b3;
  margin-left: 250px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Wrap = styled.div`
  padding: 60px;
  color: #737373;
`;

export const Switcher = styled.div`
  display: flex;
  font-size: 15px;
  margin-bottom: 20px;
  align-items: center;
  p {
    margin-left: 5px;
    color: #fff;
    font-size: 16px;
  }

  p:hover {
    text-decoration: underline;
  }

  a {
    color: #fff;
  }
`;

export const SubDes = styled.div`
  font-size: 13px;
  line-height: 1.2;

  p {
    color: #0071d5;
    display: inline;
    margin-left: 3px;
  }

  p:hover {
    text-decoration: underline;
  }
`;

export const BgImg = styled.div`
  height: 100%;
  background-image: url("images/loginBC.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
