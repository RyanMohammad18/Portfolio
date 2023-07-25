import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeader/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

import "./style.scss";


const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const [openModal,setOpenModal] =useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form element
    const form = e.target;

    // Get the form data
    const formData = new FormData(form);

    try {
      // Send the form data to Formspree using fetch or any other preferred method
      await fetch(form.action, {
        method: form.method,
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      // Form submission successful, set the submitted state to true
      setSubmitted(true);
      alert("Message has sent");
    } catch (error) {
      // Handle error if the form submission fails
      console.error('Error submitting the form:', error);
    }
  };
 

  return (
    <>
      <section id="contact" className="contact">
        <PageHeaderContent
          headerText="Contact Me"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact__content__form">
              <form action="https://formspree.io/f/mbjvlkdn" method="POST" onSubmit={handleSubmit}>
                <div className="contact__content__form__controlswrapper">
                  <div>
                    <input
                      required
                      name="name"
                      className="inputName"
                      type={"text"}
                    />
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      required
                      name="email"
                      className="inputEmail"
                      type={"text"}
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <div>
                    <textarea
                      required
                      name="message"
                      className="inputDescription"
                      type={"text"}
                      rows="5"
                    />
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  </div>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </Animate>
        </div>
      </section>
     
      
    </>
  );
};

export default Contact;
