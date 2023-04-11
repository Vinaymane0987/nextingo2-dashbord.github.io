import careers_img1 from '../../src/images/careers_img1.jpg';
import careers_img2 from '../../src/images/careers_img2.jpeg';
import careers_img3 from '../../src/images/careers_img3.jpeg';
import careers_img4 from '../../src/images/careers_img4.jpeg';
import { BsPeopleFill } from 'react-icons/bs';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { FaLocationArrow } from 'react-icons/fa';
import { AiOutlineSafety } from 'react-icons/ai';
import { TiLeaf } from 'react-icons/ti';
import { FaConnectdevelop } from 'react-icons/fa';

const Career = () => {
  return (
    <div className="career__container">
      <img src={careers_img1} alt="" />
      <div className="careers__content">
        <div className="careers__content_para">
          <h2>
            Some Technology. <br /> A Way to Make Connections.
          </h2>
          <p>
            At Aptiv, we don’t just see the world differently, we work to change
            it by developing technology that makes mobility safer, greener and
            more connected.
          </p>
          <p>
            Take ownership of your career journey, and work with a diverse and
            talented team of industry leaders to develop solutions that build a
            better future. Together we solve the world’s toughest challenges in
            mobility and make active safety, autonomous vehicles, over-the-air
            connectivity and high-voltage electrification possible.
          </p>
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
                src={careers_img2}
                class="d-block mx-auto h-auto  w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={careers_img3}
                class="d-block mx-auto h-auto w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={careers_img4}
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
      <div className="careers__third_main">
        <div className="careers__third">
          <h2>See Yourself at a Global Company</h2>
        </div>
        <div className="careers__third_second">
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
      </div>

      <div className="careers__fourth">
        <div className="careers__mission">
          <h2>Our Mission</h2>
          <span>
            WE’RE WORKING TO MAKE A SAFER, GREENER AND MORE CONNECTED WORLD.
          </span>
        </div>
        <div className="careers__mission_flex">
          <div className="caree_mission_main">
            <div className="careers__mission_1">
              {' '}
              <div className="careers__last">
                {' '}
                <div className="careers_mission_icon">
                  {' '}
                  <AiOutlineSafety className="icon" />{' '}
                </div>{' '}
                <div className="careers_mission_text">
                  <h3>SAFE</h3>
                </div>
              </div>
              <p>
                Our innovations are helping to enable a world with zero
                fatalities, zero injuries and zero accidents.
              </p>
              <button className="btnhiaiia">Learn More</button>
            </div>
          </div>
          <div className="caree_mission_main">
            <div className="careers__mission_1">
              <div className="careers__last">
                <div className="careers_mission_icon">
                  <TiLeaf className="icon" />
                </div>
                <div className="careers_mission_text">
                  <h3>GREEN</h3>
                </div>
              </div>
              <p>
                Zero emissions means electrifying <br /> mobility and adopting
                sustainable <br /> practices in every region where we <br />{' '}
                operate to become carbon neutral <br /> by 2040.
              </p>
              <button className="btnhiaiia">Learn More</button>
            </div>
          </div>
          <div className="caree_mission_main">
            <div className="careers__mission_1">
              <div className="careers__last">
                <div className="careers_mission_icon">
                  <FaConnectdevelop className="icon" />
                </div>
                <div className="careers_mission_text">
                  <h3>CONNECTED</h3>
                </div>
              </div>
              <p>
                Seamlessly connecting passengers <br />
                to their vehicles and their vehicles <br />
                to the world around them will <br />
                improve user experience.
              </p>
              <button className="btnhiaiia">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
