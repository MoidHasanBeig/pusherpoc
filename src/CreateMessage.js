import React, { useState } from "react";

const CreateMessage = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "http://ec2-99-79-193-125.ca-central-1.compute.amazonaws.com/message",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ value: value }),
      }
    );
    setValue("");
  };

  return (
    <div className="pt-5 w-100 d-flex flex-column create-message-container">
      <h1 className="mb-5">Welcome</h1>
      <form className="mt-5 mb-3 w-75 mx-auto" onSubmit={handleSubmit}>
        <input
          className="w-75 message-input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Message"
        />
        <input className="w-25 btn btn-primary" type="submit" value="Send" />
      </form>
      <h4 className="w-75 mx-auto mt-5 text-muted">
        Enter your message above and hit send to broadcast to all connected
        users.
      </h4>
      <h4 className="w-75 mx-auto mt-5 text-muted">
        All the messages will be updated in real time on the right hand side
        panel and can be viewed instantly by anyone who's connected at that
        time.
      </h4>
    </div>
  );
};

export default CreateMessage;
