import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./Courses.css";
import Card from "react-bootstrap/Card";
import { Button, CardGroup, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://fun-codeindsite-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <MDBTypography
        tag="h3"
        className="text-center mb-4 pb-2 text-secondaryfw-bold"
      >
        Courses
      </MDBTypography>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <div>
            <div className="col mb-2">
              <div className="card h-100">
                <img
                  src={course.image}
                  class="card-img-top"
                  alt="Skyscrapers"
                  style={{ height: 200 }}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">
                    {course.details.length > 100
                      ? course.details.slice(0, 100) + "..."
                      : course.details}
                  </p>
                </div>
                <div className="card-footer">
                  <MDBBtn className="text-dark" color="light">
                    <Link className="link" to={`category/${course.id}`}>
                      See Details
                    </Link>
                  </MDBBtn>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
