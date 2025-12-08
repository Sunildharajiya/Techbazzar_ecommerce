import "../css/contact.css";
import phoneIcon from "../assets/call.png";
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/location.png";
import whatsappIcon from "../assets/watsapp.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p className="subtitle">Feel free to reach out anytime!</p>

      <div className="contact-box">
        <div className="contact-item">
          <img src={phoneIcon} alt="phone" />
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-item">
          <img src={emailIcon} alt="email" />
          <h3>Email</h3>
          <p>sunil@example.com</p>
        </div>

        <div className="contact-item">
          <img src={locationIcon} alt="location" />
          <h3>Location</h3>
          <p>Ahmedabad, Gujarat</p>
        </div>

        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          className="whatsapp-btn"
        >
          <img src={whatsappIcon} alt="whatsapp" />
          WhatsApp Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
