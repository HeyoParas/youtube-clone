import React, { useEffect,useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import bell from "../assets/bell.svg";
const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState();
  const dispatchEvent = useDispatch();
  const [SearchParams] = useSearchParams();
  console.log("this",SearchParams.get("v"));
  const videoId = SearchParams.get("v");

  useEffect(() => {
    dispatchEvent(closeMenu());
    getinfo();
  },[]);

  const getinfo = async ()=>{
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBMXCBmAqpKvkjAJfwvhF1k8tJLfX5ftZI`);
    const data = await response.json();
      setVideoInfo(data.items[0]);
  }
  console.log(videoInfo)

  return (
<div className="px-20 py-5">
  <iframe
  className="rounded-2xl"
    width="1200px"
    height="700px"
    src={`https://www.youtube.com/embed/${SearchParams.get("v")}?autoplay=1&mute=1`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
 <div class="flex flex-col p-4">
  <div class=" text-xl font-bold mb-2">{videoInfo?.snippet?.title}</div>
<div className="flex justify-between">
<div class="flex items-center mb-2">
    <img src="" alt="" />
    <div>
    <div class="text-lg mr-2 font-medium">{videoInfo?.snippet?.channelTitle}</div>
    <div class="text-gray-400 text-sm mr-2">4.49M subscribers</div>
    </div>
  <button className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
    <img src={bell} className="w-5 h-5" alt="bell" />
    <span>Subscribe</span>
  </button>
  </div>

  <div class="flex items-center">
    <div class="text-sm mr-2">154K</div>
    <button class="bg-gray-600 text-white px-3 py-1 rounded mr-2">Dislike</button>
    <button class="bg-gray-600 text-white px-3 py-1 rounded mr-2">Share</button>
    <button class="bg-gray-600 text-white px-3 py-1 rounded mr-2">Download</button>
    <button class="bg-gray-600 text-white px-3 py-1 rounded mr-2">Thanks</button>
    <button class="bg-gray-600 text-white px-3 py-1 rounded">Clip</button>
  </div>
</div>
</div>

</div>

  );
};

export default WatchPage;
