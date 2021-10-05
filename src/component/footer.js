import React from 'react'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <>
         <div className="footer">
             <div className="footer_heading">About Us</div>
             <div className="footer_para">primewire.es is a free movies streaming website, it allows you to watch movies, tv shows in high quality for free.</div>
             <div className="footer_para2"><i>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</i></div>

         <div className="footer_links">
             <Link to="#">Sitemap</Link>
             <Link to="#">Contact</Link>
             <Link to="#">Nikhil</Link>
             <Link to="#">DMCA</Link>

         </div>

         </div>   
        
        </>
    )
}

export default Footer;
