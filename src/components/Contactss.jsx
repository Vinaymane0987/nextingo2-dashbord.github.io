import contact_img1 from '../images/contact_img1.jpg';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contactss = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cmikshq',
      'template_pd5xqea',
      form.current,
      'hnSfrHpzY1dbgqg65'
    );

    e.target.reset();
  };

  return (
    <div className="Contactss__container">
      <div className="contact__container__main">
        <div className="contact__first">
          <h2>Let's Chat</h2>
          <h3>Address</h3>
          <GrLocation className="contact__icon" />
          <span>
            First Floor, KLE-CTIE Tech-Park Building, BVB Campus, <br />{' '}
            Vidyanagar, Hubli-580030
          </span>
          <a href="mailto:nextingoindia@gmail.com" target=" _blank">
            <br /> nextingoindia@gmail.com
          </a>
        </div>
        <div className="contact__first_img">
          <img src={contact_img1} alt="" />
        </div>
      </div>
      <div className="contact__headlines">
        <h5>Get In Touch</h5>
        <h2>Connect With Us</h2>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h6>nextingoindia@gmail.com</h6>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h6>+91 7795368246</h6>
            {/* <h5>+91 9606163548</h5> */}
          </article>
        </div>
        {/* End of the contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="text"
            name="country"
            placeholder="Your Country"
            required
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="Enter your phone number"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactss;
