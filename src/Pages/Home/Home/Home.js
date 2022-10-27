import React from "react";
import { Gradient } from "react-gradient";
import { Link } from "react-router-dom";
import "./Home.css";
import { MDBBtn } from "mdb-react-ui-kit";
import Typing from "react-typing-animation";

const gradients = [
  ["#bd19d6", "#ea7d10"],
  ["#ff2121", "#25c668"],
];

const Home = () => {
  return (
    <div className="text text-center">
      <Gradient
        gradients={gradients} // required
        property="background"
        duration={3000}
        angle="45deg"
        className="text-center"
      />
      <Typing>
        <Typing.Delay ms={1000} />
        Welcome To CourseHero
      </Typing>

      <div className="text-center">
        <MDBBtn className="text-dark" color="light">
          <Link className="link" to="/courses">
            Explore Courses
          </Link>
        </MDBBtn>
      </div>
    </div>
  );
};

export default Home;
