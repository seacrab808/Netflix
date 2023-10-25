import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import styled from "styled-components";
import requests from "../api/requests";

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
`;

const Movies = () => {
  return (
    <>
      <Banner />
      <Trending>
        <RowWrap>
          <Title>액션 영화</Title>
          <Row id="AC" fetchUrl={requests.fetchActionMovies} />
        </RowWrap>
        <RowWrap>
          <Title>코미디 영화</Title>
          <Row id="CO" fetchUrl={requests.fetchComedyMovies} />
        </RowWrap>
        <RowWrap>
          <Title>다큐멘터리</Title>
          <Row id="DO" fetchUrl={requests.fetchDocumentaries} />
        </RowWrap>
        <RowWrap>
          <Title>공포 영화</Title>
          <Row id="HO" fetchUrl={requests.fetchHorrorMovies} />
        </RowWrap>
        <RowWrap>
          <Title>로맨스 코미디</Title>
          <Row id="RO" fetchUrl={requests.fetchRomanceMovies} />
        </RowWrap>
      </Trending>
    </>
  );
};

export default Movies;
