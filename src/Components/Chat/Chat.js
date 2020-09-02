import React, {useState, useEffect} from 'react';
import './Chat.scss';
import io from 'socket.io-client';


const Chat = () => {
    const [messageStream,setMessageStream] = useState(['Hello and Welcome']);
    const [message, setMessage] = useState('')
    var socket = io.connect('localhost:5000')
    useEffect( () => {
        getMessages()
    }, [messageStream.length])

    const getMessages = () => {
        socket.on("message", msg => {setMessageStream([...messageStream, msg])
        });
    }

    const onClick= () => {
        console.log(message);
        if (message !== "") {
            socket.emit("message", message);
            console.log(messageStream)
        }
        else {
            console.log("Add Message")
        }
    }
    return(
        <>
            <div class="chat-container">
                Chat 
                {messageStream.length > 0 &&
                    messageStream.map(msg => (
                      <div>
                        <p>{msg}</p>
                      </div>
                    ))}
                <input type="text" onChange={event => setMessage(event.target.value)}/>
                <button onClick = {() => onClick()}> Send Message</button>
            </div>
        </>
    );
}

export default Chat