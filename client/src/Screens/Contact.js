import React, { useState } from "react";
import Input from "../Components/Input";

const Contact = () => {
  const [email, setEmail] = useState({ value: "", err: false, msg: "" });
  const [title, setTitle] = useState({ value: "", err: false, msg: "" });
  const [desc, setDesc] = useState({ value: "", err: false, msg: "" });

  return (
    <div>
      <div>
        <img
          src="https://r-company.netlify.app/images/Contact%20us.gif"
          alt="..."
        />
      </div>
      <div>
        <Input
          iconClass="bi bi-envelop-fill"
          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
          data={email.value}
          setData={setEmail}
          type="email"
          placeholder="Email"
          name="email"
          err={email.err}
          msg={email.msg}
        />
        <Input
          d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          iconClass="bi bi-chat-left"
          data={title.value}
          setData={setTitle}
          type="text"
          placeholder="A gist of issue..."
          name="title"
          err={title.err}
          msg={title.msg}
        />
        <Input
          d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          iconClass="bi bi-chat-left-fill"
          data={desc.value}
          setData={setDesc}
          type="text"
          placeholder="Please Elaborate here..."
          name="desc"
          err={desc.err}
          msg={desc.msg}
        />
      </div>
    </div>
  );
};

export default Contact;
