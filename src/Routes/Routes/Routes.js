import { createBrowserRouter } from "react-router-dom";
import CoursesMain from "../../layout/CoursesMain";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseID from "../../Pages/CourseID/CourseID";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
  {
    path: "/",
    element: <CoursesMain></CoursesMain>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <CourseID></CourseID>,
      },
      {
        path: "courses/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://fun-codeindsite-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fun-codeindsite-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <div className="text-center">404 PAGE NOT FOUND!</div>,
  },
]);
