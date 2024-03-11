import  { useEffect, useState } from "react"
import './Feed.css'
import { API_KEY } from "../../data"
import {Link} from 'react-router-dom'
import { value_converter } from "../../data"
import moment from 'moment'

function Feed({category}){
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(()=>{
        FetchData()
        },[category])

    const FetchData = async()=>{
        try {
            const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
            await fetch(videoList_url).then(res=>res.json()).then(data=>setData(data.items))
            setIsLoading(false)
        } 
        catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    return(
        <>
        {isLoading ? 
        (<h1>Loading...</h1>) :
        (<div className="feed">
            {data.map((item,index)=>{
             return(
                <div key={index}>
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
                </div>
             )
            })}
        </div>)
    }
    </>
    )
    
}


export default Feed