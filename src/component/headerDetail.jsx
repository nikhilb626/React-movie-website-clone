import React from 'react';
import {Link} from "react-router-dom";

const HeaderDetail = () => {
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
                <Link  to="/">HOME</Link>
                <Link  to="#">GENRE</Link>
                <Link  to="#">MOVIES</Link>
                <Link  to="#">TV-SHOWS</Link>
            </div>

            <div className="search_container_detail">
                <input type="search" placeholder="Enter Your Keywords..." />


            </div>

            <div className="login">
                <div className="user"><i class="fas fa-user-circle"></i></div>
                <div className="sign">Login/Register</div>
            </div>

        </div>


           
        </div>
        </>
    )
}

export default HeaderDetail;
