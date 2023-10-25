import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, black, transparent);
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const NavLeft = styled.div`
  margin-left: 35px;
  display: flex;
  justify-content: start;
  align-items: center;

  a {
    color: #fff;
  }

  img {
    width: 100px;
  }
`;

const Logo = styled.span`
  margin-right: 32px;
`;
const LeftLink = styled.span`
  margin-left: 25px;
  font-size: 15px;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 30px;
`;

const Search = styled.div`
  cursor: pointer;
  svg {
    width: 28px;
  }
  margin-right: 20px;
`;

const Profile = styled.div`
  cursor: pointer;
  position: relative;

  a {
    color: #fff;
  }

  svg {
    width: 30px;
  }

  ul {
    padding: 20px;
    font-size: 14px;
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    visibility: none;
    opacity: 0;
    background-color: rgba(10, 10, 10, 0.6);
    border-radius: 5px;
    transition: 0.3s;

    svg {
      width: 20px;
      fill: gray;
      margin-bottom: -3px;
    }
  }

  ul::after {
    content: "";
    position: absolute;
    top: -17px;
    right: 8px;
    border-bottom: 7px solid #e5e5e5;
    border-top: 7px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }

  li:first-child {
    margin-bottom: 20px;

    span {
      margin-left: 5px;
    }
  }

  li:hover {
    text-decoration: underline;
  }

  &:hover ul {
    visibility: visible;
    opacity: 1;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();

  const onLogOut = async () => {
    const ok = window.confirm("로그아웃 하시겠습니까?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <NavLeft>
        <Logo>
          <Link to="/">
            <img src="images/Logonetflix.png" alt="netflix" />
          </Link>
        </Logo>
        <LeftLink>
          <Link to="/">홈</Link>
        </LeftLink>
        <LeftLink>
          <Link to="/movies">영화</Link>
        </LeftLink>
        <LeftLink>
          <Link to="/calldibs">내가 찜한 리스트</Link>
        </LeftLink>
      </NavLeft>
      <NavRight>
        <Search>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Search>
        <Profile>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>

          <ul>
            <li>
              <Link to="/change">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
                <span>프로필</span>
              </Link>
            </li>
            <li onClick={onLogOut}>
              <div>넷플릭스에서 로그아웃</div>
            </li>
          </ul>
        </Profile>
      </NavRight>
    </Wrapper>
  );
};

export default NavBar;
