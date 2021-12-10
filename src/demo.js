import React, { useState, useRef } from "react";
import { InstagramStreamer } from "react-instagram-streamer";
import "./index.css";

const Demo = () => {
  const [token, setToken] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    value && setToken(value);
  };

  return (
    <>
      <h1 className="header">React Instagram Streamer Demo</h1>
      <p className="info">Wait for 10 seconds to see the magic :)</p>
      <div className="token-text">
        <input
          type="text"
          placeholder="Please enter your token"
          ref={inputRef}
        />
        <button onClick={(e) => handleSubmit(e)}>Fetch Instagram images</button>
      </div>
      {token && (
        <div className="container">
          <InstagramStreamer accessToken={token} />
        </div>
      )}
    </>
  );
};

export default Demo;
