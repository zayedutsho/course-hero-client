import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://coding-shikhi-server-taamzid.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <ul class="list-group list-group-light">
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-secondary fw-200 fs-4"
        >
          Categories : {courses.length}
        </MDBTypography>
        <div>
          {courses.map((course) => (
            <li
              key={course.id}
              class="list-group-item px-3 border-0 rounded-3 list-group-item-success mb-2"
            >
              <Link
                className="link text-center"
                to={`/courses/category/${course.id}`}
              >
                {course.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default LeftSideNav;
