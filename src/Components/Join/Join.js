import React, {useState} from 'react';
import './Join.scss';
import {Link} from 'react-router-dom';
import Chat from '../Chat/Chat.js';
import ls from 'local-storage'


const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <>
            <div class="join-container">
                <div class="header">
                    Join an Online Game
                </div>
                <input type="text" onChange={event => setName(event.target.value)}/>
                <input type="text"onChange={event => setRoom(event.target.value)}/>
                <button><Link to={<Chat/>}>Join</Link></button>
            </div>
        </>
    );
}

export default Join;