import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../common/FormFields/InputField";
import TextArea from "../../common/FormFields/TextArea";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_sx3oamb",
        "template_txyzt3s",
        form.current,
        "nHMTj6uq-H9BJY0C6"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Message not sent!");
          form.current.reset();
        }
      );
  };

  return (
    <section
      id="contact"
      className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-[#1C343F] min-h-screen font-poppins"
    >
      <h1 className="font-extrabold md:text-5xl text-2xl text-center text-white mb-3">
        <span className="text-[#66bb6a]">&#60;</span>SendMeAMessage
        <span className="text-[#66bb6a]">&#47;&#62;</span>
      </h1>
      <h5 className="text-white text-center lg:text-lg text-sm my-4">
        Got a question or proposal, or just want to say hello? Go ahead.
      </h5>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center mt-16"
      >
        <ToastContainer />
        <div className="grid grid-cols-2 w-80 md:w-96 lg:w-1/2 space-x-6">
          <div className="flex flex-col w-full">
            <InputField
              name="name"
              placeholder="Your Name"
              label="Name"
              type="text"
            />
          </div>

          <div className="flex flex-col w-full">
            <InputField
              name="email"
              placeholder="Your Email"
              label="Email"
              type="text"
            />
          </div>
        </div>

        <div className="w-80 md:w-96 lg:w-1/2 flex flex-col mt-12">
          <TextArea
            name="message"
            placeholder="Your Message"
            label="Message"
            rows="2"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#66bb6a] text-white px-4 py-2 rounded-md mt-8"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      <div className="flex flex-col items-center md:items-end justify-center mt-16">
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/tokakirin"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/mdnrahman/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-white" />
          </a>
          <a
            href="https://github.com/Md-Nrahman"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
