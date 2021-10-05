import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="header">
        <div className="header_top">
         <div className="nav_toggleBtn"><i class="fas fa-list"></i></div>

            <div className="logo">
                <div className="logo_icon"><i class="fas fa-film"></i></div>
                <div className="web_name">Primewire.es</div>
            </div>
            <div className="nav_links">
                <Link to="/">HOME</Link>
                <Link to="">GENRE</Link>
                <Link to="#">MOVIES</Link>
                <Link to="#">TV-SHOWS</Link>

            </div>

            <div className="login">
                <div className="user"><i class="fas fa-user-circle"></i></div>
                <div className="sign">Login/Register</div>
            </div>

        </div>

            <div className="top_heading">Find Movies, TV-shows and more</div>

            <div className="search_container">
                <input type="search" placeholder="Enter Your Keywords..." />

                <button><i class="fas fa-search"></i></button>

            </div>
        </div>
        </>
    )
}

export default Header;
