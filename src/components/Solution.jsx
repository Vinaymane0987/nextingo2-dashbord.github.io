import solution_img1 from '../images/solution_img1.png';
import solution_img2 from '../images/solution_img2.jpeg';
import solution_img3 from '../images/solution_img3.png';
import solution1 from '../images/solution1.jpeg';
import solution2 from '../images/solution2.jpeg';
import solution3 from '../images/solution3.jpeg';
import solution4 from '../images/solution4.jpeg';
import solution5 from '../images/solution5.jpeg';
import solution6 from '../images/solution6.jpeg';
import solution7 from '../images/solution7.jpeg';
import solution8 from '../images/solution8.jpeg';

// import Carousel from 'better-react-carousel';
const Solution = () => {
  return (
    <div className="solution__container">
      <img className="solution__image" src={solution_img1} alt="" />
      <div className="soution__box">
        <h3>End-to-End Solutions</h3>
        <span>SOLVING MOBILITY'S TOUGHEST CHALLENGES</span>
      </div>
      <div className="solution__segment_content">
        <div className="solution_segment">
          <h2>Business Segments</h2>
          <span>
            APTIV IS THE ONLY PROVIDER OF AN INTEGRATED VEHICLE BRAIN AND
            NERVOUS SYSTEM
          </span>
          <h5>
            Aptiv’s technologies and capabilities are powerful on their own. But
            integrated together, they represent a complete mobility solution.
          </h5>

          <div className="solution__boxes">
            <div className="solution__box_left">
              <div className="solution_box_img">
                <img src={solution_img2} alt="Images" />
                <h4>ADVANCED SAFETY & USER EXPERIENCE</h4>
              </div>
              <p>
                Encompasses our deep expertise in software enabled solutions
                which is improve the safety, comfort and convenience of the
                vehicle,supported bye core capabilities in advanced computing,
                connectivity, data management is and analytics.
              </p>
            </div>
            <div className="solution_box_right">
              <div className="solution_box_img">
                <img src={solution_img3} alt="Images" />
                <h4>SIGNAL & POWER SOLUTIONS</h4>
              </div>
              <p>
                Leverages our heritage as a global architecture provider and
                systems integrator to deliver the high-speed data and high-power
                electrical systems required for feature-rich, highly-automated
                vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ marginTop: '50px' }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={solution1}
                class="d-block mx-auto h-auto   w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={solution2}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={solution3}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={solution4}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={solution5}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={solution6}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="solution__Conseration">
        <div className="solutionImg">
          <img src={solution7} alt="" />
        </div>
        <div className="solutionContent">
          <h2>The Conversation Continues </h2>
          <span>
            A CLOSER LOOK AT THE TECHNOLOGIES <br /> THAT MATTER TO OEMS
          </span>
          <p>
            In this ongoing Innovation in Motion video series, NextinGo <br />
            experts dive deeper into the technologies highlighted in our 2021
            kickoff event.
          </p>
          <button className="btn">Learn More </button>
        </div>
      </div>

      <div className="solution_last">
        <div className="solution__last_left">
          <h2>
            Explore Our Solutions <br /> Through Augmented <br /> Reality
          </h2>
          <span>
            TAKE A TOUR <br />
          </span>
          <button className="btn">Learn More</button>
        </div>
        <div className="solution__last_img">
          <img src={solution8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
