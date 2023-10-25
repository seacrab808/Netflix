import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Wrapper = styled.div``;

const Layout = () => {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
