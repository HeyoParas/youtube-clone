import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
const MainContainer = () => {
    const dispatchEvent = useDispatch();
    dispatchEvent(toggleMenu());
  return (
    <div>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
