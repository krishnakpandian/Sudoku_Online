import React, {useState} from 'react';
import './Join.scss';

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
            </div>
        </>
    );
}

export default Join;