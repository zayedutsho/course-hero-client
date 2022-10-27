import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div>
        <section class="">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <p>
                  <span class="h2 text-success fw-200">Checkout Cart </span>
                </p>

                <div class="card mb-4">
                  <div class="card-body p-4">
                    <div class="row align-items-center">
                      <div class="col-md-2">
                        <img
                          src={courses.image}
                          class="card-img-top"
                          alt="Skyscrapers"
                        />
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Course ID</p>
                          <p class="lead fw-normal mb-0">{courses.id}</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-0 pb-2">Name</p>
                          <p class="lead fw-normal mb-0">{courses.name}</p>
                        </div>
                      </div>

                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Quantity</p>
                          <p class="lead fw-normal mb-0">00</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Price</p>
                          <p class="lead fw-normal mb-0">$00</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Total</p>
                          <p class="lead fw-normal mb-0">$00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-5">
                  <div class="card-body p-4">
                    <div class="float-end">
                      <p class="mb-0 me-5 d-flex align-items-center">
                        <span class="small text-muted me-2">Order total:</span>{" "}
                        <span class="lead fw-normal">$00</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-light btn-lg me-2">
                    <Link className="link" to="/courses">
                      Continue shopping
                    </Link>
                  </button>
                  <button type="button" class="btn btn-primary btn-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
