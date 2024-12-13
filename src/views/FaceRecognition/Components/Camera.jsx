import React, { useState } from "react"
import Webcam from "react-webcam"
import { MaterialSymbol } from "react-material-symbols"
const Camera = (props) => {
  const { className } = props
  const [videoConstraints, setVideoConstraints] = useState({
    facingMode: "user",
  })
  const changeCamera = () => {
    setVideoConstraints(
      videoConstraints.facingMode === "user"
        ? { facingMode: "environment" }
        : { facingMode: "user" }
    )
  }
  return (
    <div className={className + " relative"}>
      <Webcam
        className="w-full h-full object-cover object-center"
        audio={false}
        screenshotFormat="image/jpeg"
        width="100%"
        height="100%"
        videoConstraints={videoConstraints}
      />
      <button
        onClick={changeCamera}
        className="absolute right-4 top-4 z-20 bg-[#1A0242] rounded-full text-white flex justify-center items-center p-2 text-[#68FF33]">
        <MaterialSymbol
          icon="cameraswitch"
          size={24}
          fill
          grade={-25}
          color={"#68FF33"}
        />
      </button>
    </div>
  )
}
export default Camera
