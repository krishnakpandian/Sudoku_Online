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
                <label for="name">Name</label>
                <input type="text" name = "name" onChange={event => setName(event.target.value)}/>

                <label for="room">Room</label>
                <input type="text" name="room" onChange={event => setRoom(event.target.value)}/>
                <button><Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/online?name=${name}&room=${room}`}> Join </Link></button>
            </div>
        </>
    );
}

export default Join;