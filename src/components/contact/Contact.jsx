import "./contact.css";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-div">
        <h2>Send me an email</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-div">
            <label>Name</label>
            <input type="text" autoComplete="none" />
          </div>
          <div className="input-div">
            <label>Email</label>
            <input type="email" autoComplete="none" />
          </div>
          <div className="input-div">
            <label>Message</label>
            <textarea />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <a href="#top">Back to top</a>
      <p>Developed by me.</p>
    </section>
  );
};
