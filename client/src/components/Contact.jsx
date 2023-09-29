import React, { useState } from 'react';
import Contact1 from '../assests/contact1.jpg'

const Contact = () => {
  const [msg, setMsg] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setMsg((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(msg),
      });

      if (res.status === 200) {
        window.alert('Message sent successfully');
        setMsg({ name: '', email: '', message: '' });
      } else {
        window.alert('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      window.alert('An error occurred while sending the message');
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 h-20 ">
              <img
                src={Contact1}
                alt=""
                className="w-75 mt-5 "
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Borra Surendra"
                    name="name"
                    value={msg.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    name="message"
                    value={msg.message}
                    onChange={handleInput}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary ms-2"
                >
                  Send Message <i className="fa fa-paper-plane"></i>{' '}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
