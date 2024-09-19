import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
        console.error('Invalid email format');
        alert('Please enter a valid email address.');
        return;
    };

    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact-page">
      <h2 id="about-title">Contact Me</h2>
      <form onSubmit={handleSubmit} id="form">
        <div className="content">
          <label htmlFor="name">Name</label>
          <input
            className="inputs"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="content">
          <label htmlFor="email">Email</label>
          <input
            className="inputs"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="content">
          <label htmlFor="message">Message</label>
          <textarea
            className="inputs"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" id="submit-btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;