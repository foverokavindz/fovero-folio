import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import './Contact.css';

const NotificationType = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const notify = (type) => {
    if (type === NotificationType.SUCCESS) {
      toast.success('Email was sent Successfully!', {
        position: 'top-center',
      });
    } else if (type === NotificationType.ERROR) {
      toast.error('Email is not sent!', {
        position: 'top-center',
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(!isSending);

    emailjs
      .sendForm('service_iipp5p8', 'template_mw9cj3c', form.current, {
        publicKey: 'V_-J9LWhLL0RJXpEY',
      })

      .then(
        () => {
          setIsSending(false);
          notify(NotificationType.SUCCESS);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false);
          notify(NotificationType.ERROR);
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk about everything</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 🙌
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className={`contact__form-input ${
                  isSending ? 'disable_contact__form-input' : null
                }`}
                placeholder="Insert your name"
                name="user_name"
                disabled={isSending}
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className={`contact__form-input ${
                  isSending ? 'disable_contact__form-input' : null
                }`}
                placeholder="Insert your email"
                name="user_email"
                disabled={isSending}
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className={`contact__form-input ${
                isSending ? 'disable_contact__form-input' : null
              }`}
              placeholder="Insert your subject"
              name="user_subject"
              disabled={isSending}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="user_message"
              id=""
              cols={30}
              rows={10}
              className={`contact__form-input ${
                isSending ? 'disable_contact__form-input' : null
              }`}
              placeholder="Write your message"
              disabled={isSending}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`btn ${isSending ? 'disabled-btn' : null}`}
            value="Send"
            disabled={isSending}
            onClick={() => notify()}
          >
            {isSending ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
      <ToastContainer autoClose={3000} theme="colored" />
    </section>
  );
};

export default Contact;
