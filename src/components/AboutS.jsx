import React from 'react';
import about_img1 from '../images/about_img1.jpeg';
import about_img2 from '../images/about_img2.jpg';
import about_img3 from '../images/about_img3.jpeg';
import about_img4 from '../images/about_img4.jpeg';
import about_img5 from '../images/about_img5.jpeg';
import about_img6 from '../images/about_img6.jpeg';
import about_img7 from '../images/about_img7.jpeg';
import about_img8 from '../images/about_img8.jpeg';
import about_img9 from '../images/about_img9.jpeg';
import about_img10 from '../images/about_img10.jpeg';
import about_img11 from '../images/about_img11.jpeg';
import about_img12 from '../images/about_img12.jpeg';
import about_img13 from '../images/about_img13.jpeg';
import about_img14 from '../images/about_img14.jpeg';
import { BsPeopleFill } from 'react-icons/bs';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { FaLocationArrow } from 'react-icons/fa';

const AboutS = () => {
  return (
    <div className="about__Container">
      <div className="about__first">
        <div className="about_img_bg">
          <img className="imags" src={about_img2} alt="" />
        </div>
        <div className="about_img_sm">
          <img className="imagsss" src={about_img1} alt="" />
        </div>
      </div>
      <div className="about__box">
        <h3>About NextinGo</h3>
        <span>ENABLING NEW MOBILITY SOLUTIONS</span>
        <p>
          We believe that mobility has the power to change the world and Aptiv
          has the power to change mobility.
        </p>
      </div>
      <div className="about__second">
        <div className="about__second_first">
          <h2>NextinGo at a Glance</h2>
          <span>ADDRESSING MOBILITY'S TOUGHEST CHALLENGES</span>
          <p>
            NextinGo is a global technology leader, with more than 50 people
            across 5 manufacturing facilities and 11 major technical centers{' '}
            <br />
            worldwide. With a presence in 3 countries, we address mobility’s
            toughest challenges through our deep software and systems
            integration <br /> expertise, delivering market relevant solutions
            for our customers.
          </p>
        </div>
        <div className="about__third">
          <div className="about__btn">
            <FaLocationArrow className="icon" />{' '}
            <h3>
              03 <br /> COUNTRIES
            </h3>
          </div>
          <div className="about__btn">
            <GrTechnology className="icon" />{' '}
            <h3>
              03 <br /> TECHNICAL CENTERS
            </h3>
          </div>
          <div className="about__btn">
            <MdPrecisionManufacturing className="icon" />{' '}
            <h3>
              05 <br /> MANUFACTURING <br /> FACILITIES
            </h3>
          </div>
          <div className="about__btn">
            <BsPeopleFill className="icon" />{' '}
            <h3>
              20+ <br /> PEOPLE
            </h3>
          </div>
        </div>

        <div className="about__fourth">
          <div className="about__journey">
            <h2>Our Journey</h2>
            <span>KEY MILESTONES</span>
            <p>
              We believe that the power of new mobility – safer, greener and
              more connected – can change the world. And we know how to get it
              done. At Aptiv, we’re delivering the software capabilities,
              advanced computing platforms and networking architecture that
              makes mobility work.
            </p>
          </div>
          <div className="about__journey-right">
            <h3>DISCOVER NextinGo’S JOURNEY</h3>
            <button className="btn">Load More</button>
          </div>
        </div>
        <img className="aboutImage" src={about_img3} alt="" />
      </div>
      <div className="about__mission">
        <div className="about__mission_left">
          <h2>Our Mission</h2>
          <span>SAFE. GREEN. CONNECTED</span>
          <p>
            Aptiv holds a leading position as a technology company innovating at
            the intersection of disruptive trends in the mobility industries. We
            use our portfolio of technologies to make vehicles safer, greener
            and more connected and enable the future of mobility.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="about__mission_right">
          <img src={about_img4} alt="" />
        </div>
      </div>
      <div className="about__grid">
        <div className="about__grid_imges">
          <img src={about_img5} alt="" />
          <img src={about_img6} alt="" />
          <img src={about_img7} alt="" />
        </div>
      </div>
      <div className="about__Imagess">
        <img src={about_img8} alt="" />
      </div>

      <div className="about__sustainability">
        <h2>Our Sustainability</h2>
        <span>SUSTAINABLE BY DESIGN</span>
        <p>
          Aptiv commits to realize our mission, to live our core values, <br />{' '}
          and to continuously improve in making our products and facilities more
          sustainable.
        </p>
        <button className="btn">LEARN MORE ABOUT OUR SUSTAINABILITY</button>
      </div>
      <div className="about__bussiness">
        <h2>Our Businesses</h2>
        <div className="about_bussi_span">
          <span>TECHNOLOGY COMPANY FOCUSED ON MOBILITY SOLUTIONS</span>
        </div>
        <p>
          Aptiv’s unique position as the only provider of the brain (software
          and compute) and nervous system (power and data distribution) is{' '}
          <br /> allowing us to conceive, specify and deliver the advanced
          vehicle architectures of the future.
        </p>
        <button className="btn">EXPLORE OUR BUSINESSES</button>
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
                src={about_img9}
                class="d-block mx-auto h-auto  w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={about_img10}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={about_img11}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={about_img12}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={about_img13}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={about_img14}
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
    </div>
  );
};

export default AboutS;
