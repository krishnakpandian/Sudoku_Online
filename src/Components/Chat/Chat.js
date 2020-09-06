import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './Chat.scss'

let socket = io.connect("http://localhost:5000");

const Chat = (props) => {
  const [messageStream, setMessageStream] = useState(["Hello And Welcome"]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessages();
  }, [messageStream.length]);

  const getMessages = () => {
    socket.on("message", msg => {

      setMessageStream([...messageStream, msg]);
    });
  };

  const onChange = e => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    if (message !== "") {
      socket.emit("message", props.name + ':' + message);
      setMessage("");
    }
  };

  return (
      <>
        <div class="chat-container">
            <div class="messages">
        {messageStream.length > 0 &&
            messageStream.map(msg => (
            <>
            <div class="message">
                {msg}
            </div>
            </>
            ))}
            </div>
        <input value={message} name="message" onChange={e => onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>
        </div>
    </>
  );
};

export default Chat;