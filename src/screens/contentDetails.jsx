import React,{useEffect} from 'react';
import HeaderDetail from "../component/headerDetail";
import Content from "../data";
import ContentScreen from "../screens/contentScreen";
import Footer from "../component/footer";

    const ContentDetails = ({ match }) => {
        let linkid=match.params.id;
        console.log(linkid)
        let Cont;
 {linkid==="1"?Cont=Content[0]:linkid==="2"?Cont=Content[1]:linkid==="3"?Cont=Content[2]:linkid==="4"?Cont=Content[3]:linkid==="5"?Cont=Content[4]:linkid==="6"?Cont=Content[5]:linkid==="7"?Cont=Content[6]:linkid==="8"?Cont=Content[7]:linkid==="9"?Cont=Content[8]:linkid==="10"?Cont=Content[9]:linkid==="11"?Cont=Content[10]:linkid==="12"?Cont=Content[11]:linkid==="13"?Cont=Content[12]:linkid==="14"?Cont=Content[13]:linkid==="15"?Cont=Content[14]:linkid==="16"?Cont=Content[15]:linkid==="17"?Cont=Content[16]:linkid==="18"?Cont=Content[17]:linkid==="19"?Cont=Content[18]:linkid==="20"?Cont=Content[19]:linkid==="21"?Cont=Content[20]:Cont="error"};


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <>
    <HeaderDetail />
    <div className="location_container">Home / Movies / {Cont.name}</div>
    <div className="play_container"><i class="fas fa-play-circle"></i></div>
    <div className="buttons_container">
        <button><i className="far fa-circle"></i>autoplay</button>
        <button><i className="fas fa-check-circle"></i>autoplay</button>
        <button><i className="fas fa-adjust"></i>toggle light</button>
        <button><i className="far fa-heart"></i>add to list</button>
        <button><i className="fas fa-comment"></i>comment</button>
        <button><i className="fas fa-exclamation"></i>report issue</button>
</div>

<div className="detail_recent">
    <div className="detail_container">
        <div className="detail_poster"><img src={Cont.imgsrc} alt="pic" /></div>
        <div className="details">
            <div className="detail_heading">{Cont.name}</div>
            <div className="detail_extra">
                <div className="type">HD</div>
                <div className="detail_rating"><i class="fas fa-star"></i> {Cont.rating}</div>
                <div className="duration">{Cont.duration}</div>
        </div>

                <div className="description">
                {Cont.description}
                </div>
                <div className="extra_details">
                    <div className="detail_key">country:</div>
                    <div className="detail_value">united states</div>
                </div>
                <div className="extra_details">
                    <div className="detail_key">Genre:</div>
                    <div className="detail_value">{Cont.genre}</div>
                </div>
                <div className="extra_details">
                    <div className="detail_key">release:</div>
                    <div className="detail_value">{Cont.release}</div>
                </div>
                <div className="extra_details">
                    <div className="detail_key">director:</div>
                    <div className="detail_value">{Cont.director}</div>
                </div>
                <div className="extra_details">
                    <div className="detail_key">cast:</div>
                    <div className="detail_value">{Cont.cast}</div>
                </div>
            </div>
    </div>
    <div className="recent">
        <div className="recent_heading">You may also like</div>
        <div className="content_cards">

         {Content.map((content) => (
             <div key={content._id} >
            <ContentScreen content={content} />
         </div>

        ))}


        </div>
    </div>
</div>
<Footer />
        </>
    )
}

export default ContentDetails;
