import { useEffect, useState } from 'react';
import './Feed.css';
import { API_KEY } from '../../data';
import { Link } from 'react-router-dom';
import { value_converter } from '../../data';
import moment from 'moment';

function Feed({ category, searchTerm }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, [category, searchTerm]);

  const FetchData = async () => {
    setIsLoading(true);
    try {
      let videoList_url;
      if (searchTerm) {
        videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=${searchTerm}&type=video&key=${API_KEY}`;
      } 
      else {
        videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
      }

      const response = await fetch(videoList_url);
      const data = await response.json();
      setData(data.items || []);
    } 
    catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="feed">
          {data.map((item, index) => {
            const videoId = item.id.videoId || item.id;
            const statistics = item.statistics ? (
              <p>
                {value_converter(item.statistics.viewCount)} views &bull;{' '}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            ) : null;
            if (!videoId) return null;
            return (
              <div key={index}>
                <Link
                  to={`video/${item.snippet.categoryId}/${videoId}`}
                  className="card"
                >
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                  <h2>{item.snippet.title}</h2>
                  <h3>{item.snippet.channelTitle}</h3>
                  {statistics}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Feed;