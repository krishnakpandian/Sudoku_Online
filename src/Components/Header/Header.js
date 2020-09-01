import React from 'react';
import './Header.scss'
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <>
            <div class="header-container">
                <header>
                    <div class="title">Header</div>
                    <div class = "buttons">
                        <button><Link to="/offline">Offline </Link></button>
                        <button><Link to="/online">Online </Link></button>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;