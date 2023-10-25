import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 9;
  width: 50%;
  height: 90vh;
  margin: 0 auto;
  background-color: black;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  border-radius: 10px;

  span {
    z-index: 10;
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  span:hover {
    transform: scale(1.05);
  }
`;

const BackDrop = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .black-box {
    width: 100%;
    height: 50px;
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    bottom: 0px;
  }

  .text-box {
    position: absolute;
    bottom: 6rem;
    left: 70px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .title {
    font-size: 50px;
    font-weight: 700;
    text-shadow: 2px 2px 7px gray;
  }

  .btn {
    display: flex;
    align-items: center;
    border: none;
    margin-top: 20px;
  }

  .play {
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    border-radius: 5px;
    padding: 3px;
    margin-right: 10px;

    svg {
      width: 35px;
      margin-right: 5px;
    }
  }

  .like {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 45px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const OverView = styled.div`
  margin: 20px 70px;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.4;
`;

const MovieModal = ({
  backdrop_path,
  title,
  setIsModalOpen,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
}) => {
  return (
    <Container>
      <span onClick={() => setIsModalOpen(false)}>X</span>
      <BackDrop>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />
        <div className="black-box"></div>
        <div className="text-box">
          <div className="title">{title || name}</div>
          <div className="btn">
            <button className="play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
              재생
            </button>
            <button className="like">+</button>
          </div>
        </div>
      </BackDrop>
      <OverView>{overview}</OverView>
    </Container>
  );
};

export default MovieModal;
