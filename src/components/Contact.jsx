import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#faf3dd] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/f288362f-26c0-47d5-a6f1-f149f263fb22"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-900">
            Contact
          </p>
          <p className=" py-4">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-[#e2e7f5] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#e2e7f5]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#e2e7f5] p-2"
          name="message"
          rows="10"
          placeholder="Feedback"
          required
        ></textarea>
        <button className="text-blue-900 border-1 bg-slate-400 hover:bg-blue-200 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
