"use client";

import React, { useCallback, useRef, memo } from "react";

function Form({ api }) {
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
      await fetch(`${api}/api/forms`, {
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
    <form
      className=" flex flex-col w-1/2 mx-auto border-2 rounded-lg"
      onSubmit={submit}
    >
      <label htmlFor="name">Name :</label>
      <input type="text" name="name" ref={nameRef} />
      <label htmlFor="email">Email :</label>
      <input type="email" name="email" ref={emailRef} />
      <label htmlFor="message">Message :</label>
      <textarea cols="30" rows="8" name="message" ref={messageRef}></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg w-1/3 self-center p-2"
      >
        Submit
      </button>
    </form>
  );
}

export default memo(Form);
