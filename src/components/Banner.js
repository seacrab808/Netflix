import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosInstance from "../api/movie";
import requests from "../api/requests";
import { truncate } from "../utils/truncate";

const Header = styled.header`
  display: block;
  width: 100%;
  height: 78vh;
  background-position: top center;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 330px;
  left: 100px;
`;

const Title = styled.h1`
  font-size: 120px;
  font-weight: 700;
  letter-spacing: -10px;
`;

const Tagline = styled.div`
  margin-top: 30px;
  max-width: 600px;
  line-height: 1.4;
`;

const Btn = styled.div`
  margin-top: 30px;
  display: flex;
  height: 50px;
  gap: 10px;
`;

const Play = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  font-size: 17px;
  font-weight: 700;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  transition: 0.1s;

  z-index: 9;
  svg {
    width: 35px;
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Detail = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  font-size: 17px;
  font-weight: 700;
  background-color: rgba(100, 100, 100, 0.6);
  color: #fff;
  border-radius: 5px;
  border: none;
  transition: 0.1s;
  z-index: 9;

  svg {
    width: 35px;
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Black = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, black, transparent);
`;

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기
    const response = await axiosInstance.get(requests.fetchNowPlaying);

    // 영화 중 한 개 랜덤으로 ID 가져오기
    const movieID =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 포함)
    const { data: movieDetail } = await axiosInstance.get(`movie/${movieID}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  if (!movie) {
    return <div>로딩...</div>;
  }

  return (
    <Header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <Wrapper>
        <Title>{movie.title || movie.name || movie.original_name}</Title>

        <Tagline>
          {truncate(movie.tagline, 100) || truncate(movie.overview, 100)}
        </Tagline>

        <Btn>
          <Play>
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
          </Play>
          <Detail>
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            상세 정보
          </Detail>
        </Btn>
      </Wrapper>
      <Black />
    </Header>
  );
};

export default Banner;
