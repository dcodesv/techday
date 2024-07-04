import React, { useState } from "react"
import AttendanceComponent from "../../components/CameraVisor"
import Head from "../../components/Head"
import LogoDefault from "../../assets/header.png"
import LogoSuccess from "../../assets/header-success.png"
import Camera from "./Components/Camera"
import Content from "./Components/Content"
import BgDot from "../../components/BgDot"

const FaceRecognition = () => {
  const [step, setStep] = useState(1) // 1: Reconocimiento, 2: Procesando, 3: Confirmación
  const { typeLogo, setTypeLogo } = useState("default")
  return (
    <div
      className="flex flex-col items-center px-5 box-border h-svh overflow-y-visible overflow-x-hidden relative"
      style={{
        background: `linear-gradient(135deg, #67096D 0%, #1A0242 35%, #000000 70%)`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}>
      <BgDot />
      <Head
        hideMenu={true}
        logo={typeLogo === "success" ? LogoSuccess : LogoDefault}
      />
      {/* <AttendanceComponent /> */}
      <Camera className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-2xl overflow-hidden flex-1 mt-4 z-10" />
      <Content />
    </div>
  )
}

export default FaceRecognition
