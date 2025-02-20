import React from "react";
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
  // **Destructuring the data**
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">   
      <img src={thumbnails.high.url} alt={title} 
      className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li><strong>Channel:</strong> {channelTitle}</li>
        <li><strong>Views:</strong> {statistics.viewCount}</li>
      </ul>
    </div>
  );
};
//highere order component krke component ko modify kr dia
export const AdVideoCard = ({info})=>{
return(
  <div className="w-75 shadow-2xl shadow-gray-500">
     <Link to={"/watch?v=" + info.id} key={info.id}>
    <VideoCard info={info}/>
    </Link>

  </div>
)
}

export default VideoCard;
