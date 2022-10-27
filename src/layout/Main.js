import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
          <Col lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
