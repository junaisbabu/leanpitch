import React from "react";
import "./community.css";
import Arrow from "../../images/red_arrow.png";

const content1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFQ2YvwXPbHcUOQiwIr2kdPZqjzWy-GLRMg&usqp=CAU";

function Community() {
  return (
    <div className="community-container">
      <div className="container-fluid">
        <section className="top-sec col-sm-12">
          <h1>Why We Matter?</h1>
          <img src={Arrow} />
        </section>
        <main className="center-content row">
          <section className="left-sec col-sm-12 col-md-12 col-lg-7">
            <article>
              <h1>Creative Thinking for creating an impact!</h1>
              <p>
                Leanpitch is problem solving. Whether it’s your kid asking for a
                solution to his day to day problems or the rise in threats of
                Global Warming, it’s evident that the whole human kind needs to
                be product thinkers. We, at Product Thinking community, strive
                to provide such a platform for practitioners to come together
                and learn from each other about the craft of building products.
                This Platform is run by the community for the community. We are
                a community with 46k+ product thinkers hosting various events
                across India: Webinars every week, meet-ups every month in every
                city, two conference a year.
              </p>
            </article>
          </section>
          <section className="right-sec col-sm-12 col-md-12 col-lg-5">
            <img src={content1} alt="content1" />
          </section>
        </main>

        <section className="bottom-sec col-12">
          <button className="btn btn-outline btn-lg">Join Our Community<i class="bi bi-arrow-right"></i></button>
        </section>
      </div>
    </div>
  );
}

export default Community;
