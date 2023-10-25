import React, { useCallback, useEffect, useState } from "react";
import axiosInstance from "../api/movie";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import MovieModal from "./MovieModal";

const Container = styled.div`
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    margin-top: 15px;
    cursor: pointer;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.3s;
  }

  .swiper-slide img:hover {
    transform: scale(1.05);
    z-index: 9;
    border-radius: 5px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
  }

  .swiper-pagination {
    position: relative;
    top: 0;
    z-index: 9;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 3px;
    background: rgba(100, 100, 100, 0.8);
    opacity: 1;
    border-radius: 0%;
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    transition: width 0.5s;
    background: rgba(200, 200, 200, 1);
  }
`;

const Row = ({ id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axiosInstance.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <Container>
      <Swiper
        slidesPerView={6}
        slidesPerGroup={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies &&
          movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                key={movie.id}
                className="row__poster"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      {isModalOpen && (
        <MovieModal setIsModalOpen={setModalOpen} {...movieSelected} />
      )}
    </Container>
  );
};

export default Row;
