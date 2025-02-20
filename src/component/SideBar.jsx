import React from "react";
import { useSelector } from "react-redux";
import home from "../assets/home.svg";
import shorts from "../assets/shorts.svg";
import you from "../assets/you.svg";
import subscriptions from "../assets/subscriptions.svg";
import history from "../assets/history.svg";
import watchLater from "../assets/watch_later.svg";
import playlist from "../assets/playlist.svg";
import yourVideo from "../assets/your_video.svg";
import like from "../assets/like.svg";
import download from "../assets/download.svg";
import yourClip from "../assets/your_clip.svg";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg">
      <div className="m-3 ">
        {/* <li className='font-bold'></li> */}
        <div className="">
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={home} />
              <span className="ml-5 text-lg">Home</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={shorts} />
              <span className="ml-5 text-lg">Shorts</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={subscriptions} />
              <span className="ml-5 text-lg">subscriptions</span>
            </div>
          </a>
          <hr />

        </div>
        <div className="">
            <a href="#">
                <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
                <span className="text-lg mr-4">Home</span><img src={you} className="pt-1" />
                </div>
                </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={history} />
              <span className="ml-5 text-lg">History</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={playlist} />
              <span className="ml-5 text-lg">Playlist</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={yourVideo} />
              <span className="ml-5 text-lg">Your videos</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={watchLater} />
              <span className="ml-5 text-lg">Watch later</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={like} />
              <span className="ml-5 text-lg">Liked videos</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={download} />
              <span className="ml-5 text-lg">Download</span>
            </div>
          </a>
          <a href="#">
            <div className="flex hover:bg-gray-100 w-60 p-2 rounded-xl my-1">
              <img src={yourClip} />
              <span className="ml-5 text-lg">Your clips</span>
            </div>
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
