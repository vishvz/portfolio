"use client";

import React, { useCallback, useRef, memo } from "react";

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submit = useCallback(async (e) => {
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Message = messageRef.current.value;
    e.preventDefault();

    const formData = {
      data: {
        Name,
        Email,
        Message,
      },
    };

    try {
      await fetch("http://localhost:1337/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      return new Error("Errrrrror");
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  });

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-1/2 mx-auto border-2"
        onSubmit={submit}
      >
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <textarea
          cols="30"
          rows="8"
          placeholder="Message"
          ref={messageRef}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default memo(Form);
