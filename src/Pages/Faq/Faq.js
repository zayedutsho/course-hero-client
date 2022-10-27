import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Faq = () => {
  return (
    <div>
      <MDBContainer>
        <section>
          <MDBTypography
            tag="h3"
            className="text-center mb-4 pb-2 text-primary fw-bold"
          >
            FAQ
          </MDBTypography>
          <p className="text-center mb-5">
            Find the answers for the most frequently asked questions below
          </p>

          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon far icon="paper-plane text-primary pe-2" /> Can I get enroll into Multiple Courses?
              </MDBTypography>
              <p>
                <strong>
                </strong>{" "}
                Yes, Obviously.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="pen-alt text-primary pe-2" /> Can I get discount?
              </MDBTypography>
              <p>
                <strong>
                  <u>Yes, If it is available!</u>
                </strong>{" "}
                Please, keep an eye on our website.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="user text-primary pe-2" /> Course Accessibility?
              </MDBTypography>
              <p>
                Lifetime!
              </p>
            </MDBCol> 
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
};

export default Faq;
