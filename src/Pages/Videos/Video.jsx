import './Video.css'
import Playvideo from "../../Component/PlayVideo/PlayVideo";
import Recommended from "../../Component/Recommended/Recommended";
import { useParams } from "react-router-dom";

function video(){
    const {videoId,categoryId} = useParams()
    return(
        <div className="play-container">
         <Playvideo  videoId={videoId}/>
         <Recommended categoryId={categoryId}/>
        </div>
    )
}

export default video