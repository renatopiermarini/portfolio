import { Navbar } from "../../components/navbar/Navbar";
import avatar from "../../components/pictures/avatar.svg";
import "./contact-page.css";

export const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <section className="contact-page-section">
        <div className="avatar-div">
          <img src={avatar} />
        </div>
        <div className="form-div">
          <h2>
            I’m excited to learn about your project. Complete the form and I
            will contact you as soon as posible.
          </h2>
          <form className="form-project-contact" onSubmit={handleSubmit}>
            <div className="contact-page-input-div">
              <label>Name</label>
              <input type="text" autoComplete="none" />
            </div>
            <div className="contact-page-input-div">
              <label>Email</label>
              <input type="email" autoComplete="none" />
            </div>
            <div className="contact-page-input-div">
              <label>Additional details</label>
              <textarea />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};
