import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../api/requests";
import styled from "styled-components";

const Trending = styled.div`
  position: relative;
  top: 60vh;
  margin: 0 30px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const RowWrap = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
  position: relative;
`;

const Home = () => {
  return (
    <>
      <Banner />
      <Trending>
        <RowWrap>
          <Title>지금 뜨는 콘텐츠</Title>
          <Row id="TN" fetchUrl={requests.fetchTrending} />
        </RowWrap>
        <RowWrap>
          <Title>추천 콘텐츠</Title>
          <Row id="NP" fetchUrl={requests.fetchNowPlaying} />
        </RowWrap>

        <RowWrap>
          <Title>오늘 대한민국의 TOP 시리즈</Title>
          <Row id="TR" fetchUrl={requests.fetchTopRated} />
        </RowWrap>
      </Trending>
    </>
  );
};

export default Home;
