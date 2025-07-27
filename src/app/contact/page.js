import Link from "next/link";
import "./contact.css"; // Assuming you have a CSS file for styling

const ContactPage = () => {
  return (
    <div>
      <div className="big-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-links">
        <div className="contact-link">
          <div className="placeholder-social">Facebook</div>
          <Link
            href="https://www.facebook.com/gjonson.berisha.1/"
            className="link"
          >
            @gjonson.berisha.1
          </Link>
        </div>
        <div className="contact-link">
          <div className="placeholder-social">Twitter/X</div>
          <Link
            href="https://www.facebook.com/gjonson.berisha.1/"
            className="link"
          >
            @gjonson.berisha.1
          </Link>
        </div>
        <div className="contact-link">
          <div className="placeholder-social">GitHub</div>
          <Link
            href="https://www.facebook.com/gjonson.berisha.1/"
            className="link"
          >
            @gjonson.berisha.1
          </Link>
        </div>
        <div className="contact-link">
          <div className="placeholder-social">Instagram</div>
          <Link
            href="https://www.facebook.com/gjonson.berisha.1/"
            className="link"
          >
            @gjonson.berisha.1
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
