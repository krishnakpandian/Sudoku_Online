import React from 'react';
import './Header.scss'
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <>
            <div class="header-container">
                <header>
                    Header
                    <button><Link to="/offline">Offline </Link></button>
                    <button><Link to="/online">Offline </Link></button>
                </header>
            </div>
        </>
    );
}

export default Header;