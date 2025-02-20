import React, { useEffect ,useState} from 'react'
// import { YOUTUBE_API_ } from '../utils/constant';
import VideoCard ,{AdVideoCard}from './VideoCard.jsx';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [video,setVideo] = useState([]);
  useEffect(()=>{
    getVideos();
    // suggestion();
  },[])

 
  const getVideos = async () => {
    console.log("hiiii")
    try {
      const url = process.env.REACT_APP_YOUTUBE_API_;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.items);
      setVideo(data.items);  
      // Local storage me videos store karne ka option
      // localStorage.setItem('videos', JSON.stringify(data.items));  
      console.log("hi", data); 
    } catch (error) {
      // Error message console pe print karne ke liye
      console.error("Error fetching videos:", error);
    }
  };
  
  console.log("video",video);

  return (
    <div className='flex flex-wrap  h-[88vh] overflow-y-auto mx-7'>
      {video[0] && <AdVideoCard info={video[0]}/>}
      {video.map((item, idx) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  )
};

export default VideoContainer;
