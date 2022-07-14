import React from "react";
import "./lab.css";
import Lab_Background_Image from "../../images/pt_lab_image.png";

function Lab() {
  return (
    <div className="lab-container container-fluid">
      <div className="lab-row-container row">
        <section className="left-sec col-sm-12 col-lg-6">
          <h1>Leanpitch Thinking Labs</h1>
          <p>
            Product Thinking Community introduces PT Labs powered by Leanpitch.
            Product managers are creative thinkers and life long researchers.
            Their curiosity to understand the problem, persistence to solve
            them, and empathy to make the solutions easy makes them resourceful
            in solving Social Problems.
          </p>
          <p>
            If you have it in you and are looking for an opportunity to
            contribute back to society, join PT Labs. Become part of a product
            team of volunteers, pickup a social problem, swarm together, design,
            and run experiments to find a problem/solution fit. Present your
            discovery and be recognized at next Product Thinking Conference.
            Product Thinking community will pursue further on implementing a
            solution in the subsequent cohorts, which you can again be part of.
          </p>
          <p>
            Share your interest by submitting your details. We will get back to
            you with more information.
          </p>
          <div className='btn-container'>
            <button className="btn" >View Details<i class="bi bi-arrow-right"></i></button>
            <button className="btn" >Register Now<i class="bi bi-arrow-right"></i></button>
          </div>
        </section>
        <section className="right-sec col-sm-12 col-lg-6">
          <img src={Lab_Background_Image} />
        </section>
      </div>
    </div>
  );
}

export default Lab;
