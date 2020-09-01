import React from 'react';
import './Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return(
        <>
            <div class="footer-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <footer>
                    <div class="About"> Developed by Krishna Pandian</div>
                    <b>Contact Us</b>
                    <br />
                    <div class="links">
                    <a href="https://www.linkedin.com/in/krishna-kumar-pandian/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin fa-2x"> </a>
                    <a href="https://www.facebook.com/krishna.pandian.35/" target="_blank" rel="noopener noreferrer" class="fa fa-facebook fa-2x"> </a>
                    <a href="mailto:krishnakpandian@gmail.com" target="_blank" rel="noopener noreferrer" class="fa fa-mail-reply fa-2x"> </a>
                    <a href="https://twitter.com/krishnakpandian"  target="_blank" rel="noopener noreferrer" class="fa fa-twitter fa-2x"> </a>
                    <a href="https://github.com/krishnakpandian" target="_blank" rel="noopener noreferrer" class="fa fa-github fa-2x"> </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;