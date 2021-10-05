import React from 'react';
import {Link} from "react-router-dom";

const ContentScreen = ({content}) => {
    return (
        <>
      

        <div className="content_box">
            <Link to={`/content/${content._id}`}>
                <div className="content_image">
                    <img src={content.imgsrc} alt="piic" />
                    <div className="label">HD</div>
                </div>
            </Link>
        <div className="content_name">
            <Link  to={`/content/${content._id}`}>{content.name}</Link>
        </div>
        <div className="content_infos">
            <div className="date">{content.release}</div>
            <div className="duration">{content.duration}</div>
            <div className="what">{content.category}</div>
        </div>
        </div>
        </>
    )
}

export default ContentScreen;
