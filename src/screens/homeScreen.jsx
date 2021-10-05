import React from 'react';
import ContentScreen from "./contentScreen";
import Header from "../component/header";
import content from "../data";
import Footer from "../component/footer";
const HomeScreen = () => {
    return (
        <>
        <Header />
        <div className="preContent">
             <div className="recommend">Recommended</div>
            <button><i class="fas fa-play-circle"></i> Movies</button>
            <button><i class="fas fa-list"></i> TV shows</button>
         </div>

         <div className="content_container">

         {content.map((content) => (
             <div key={content._id} >
            <ContentScreen content={content} />
         </div>

        ))}

        </div>
        <Footer/>
        </>
    )
}

export default HomeScreen;
