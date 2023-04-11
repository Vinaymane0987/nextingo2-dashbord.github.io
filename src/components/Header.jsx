import img1 from '../images/video1.gif';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img7 from '../images/img7.jpeg';
import img6 from '../images/img6.avif';

const Header = () => {
  return (
    <div className="header__main">
      <img className="Image" src={img1} alt="" />
      <div className="header__image_text">
        <h1>GEN 6 ADAS PLATFORM</h1>
        <button className="btnhighg">Learn More</button>
      </div>
      <div className="container__first">
        <div className="solution__container__left">
          <h2 className="name_ri">End-to-End Solutions</h2>
          <span>LEADING THE WAY</span>
          <p className="para">
            With our deep domain expertise, Aptiv is developing solutions that
            solve our customers' toughest challenges. We are enabling the
            transition to software-defined vehicles supported by electrified and
            intelligently connected architectures – which will combine to power
            the future of mobility.
          </p>
          <button className="btn sm">Know More</button>
        </div>
        <div className="insights__container__right">
          <h2 className="name">Insights</h2>
          <h6>
            {' '}
            <span>
              EXPLORE THE FUTURE OF MOBILITY WITH APTIV’S EXPERTS
            </span>{' '}
          </h6>
          <p className="para">
            Develop a richer understanding of the fundamental technologies
            shaping the safe, green and connected future of mobility.
          </p>
          <button className="btn sm ">Know More</button>
        </div>
      </div>

      <div className="technologies__container">
        <div>
          <div className="technologies__container11">
            <h2>INSIDE NextinGo TECHNOLOGIES</h2>
            <span>HEAR FROM OUR EXPERTS</span>
          </div>
        </div>
        <div className="main__container">
          <div className="tech__img__left">
            <div className="tech__Image">
              <img className="techImg" src={img3} alt="" />
            </div>
            <div className="left__container">
              <h5>
                <span>A ROADMAP FOR VEHICLE ARCHITECTURE</span>
              </h5>
              <h5>REVOLUTION IN DESIGN AND IMPLEMENTATION</h5>
            </div>
            <button className="btn sm ">Know More</button>
          </div>
          <div className="tech__img__right">
            <div className="tech__Image">
              <img className="techImg" src={img4} alt="" />
            </div>
            <div className="right__container">
              <h5>
                <span>A ROADMAP FOR VEHICLE ARCHITECTURE</span>
              </h5>
              <h5>REVOLUTION IN DESIGN AND IMPLEMENTATION</h5>
            </div>
            <button className="btn sm ">Know More</button>
          </div>
        </div>
      </div>

      <div className="shape__container">
        <div className="img__container">
          <div className="img1">
            <img className="shape__Img1" src={img6} alt="" />
          </div>
          <div className="img2">
            <img className="shape__Img2" src={img7} alt="" />
          </div>
        </div>
        <div className="shape__container-cont">
          <h2>
            Shape the Future of Mobility. <br /> Join Us.
          </h2>
          <button className="btn sm ">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
