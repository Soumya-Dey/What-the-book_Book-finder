import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Header = () => {
    return (
        <div className="logo-container">
            <a href="/" className="logo">
                What the <span>Book?</span>
            </a>
            
            <div className="links">
                <a
                    href="https://github.com/Soumya-Dey"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
                <a
                    href="https://www.instagram.com/soumya_sl/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </a>
                <a
                    href="https://www.facebook.com/soumya.dey.39948"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon />
                </a>
            </div>
        </div>
    );
};

export default Header;