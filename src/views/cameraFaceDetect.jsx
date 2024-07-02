import React, { Component, useState } from "react"
import Webcam from "react-webcam"
import { loadModels, getFullFaceDescription, createMatcher } from "../api/face"
import DrawBox from "../components/drawBox"
import { JSON_PROFILE } from "../common/profile"

const WIDTH = 420
const HEIGHT = 420
const inputSize = 160

class CameraFaceDetect extends Component {
  constructor(props) {
    super(props)
    this.webcam = React.createRef()
    this.state = {
      fullDesc: null,
      faceMatcher: null,
      facingMode: "environment",
      asistencia: [],
    }
  }

  componentWillMount() {
    loadModels()
    this.setInputDevice()
    this.matcher()
  }

  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async (devices) => {
      let inputDevice = await devices.filter(
        (device) => device.kind === "videoinput"
      )
      if (inputDevice.length < 3) {
        await this.setState({
          facingMode: "user",
        })
      } else {
        await this.setState({
          facingMode: { exact: "environment" },
        })
      }
      this.startCapture()
    })
  }

  matcher = async () => {
    const faceMatcher = await createMatcher(JSON_PROFILE)
    this.setState({ faceMatcher })
  }

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture()
    }, 1500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  capture = async () => {
    if (!!this.webcam.current) {
      await getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      ).then((fullDesc) => this.setState({ fullDesc }))
    }
  }

  render() {
    const { fullDesc, faceMatcher, facingMode } = this.state

    //obtener asistencia de localStorage cada que se actualiza el componente
    let asistencia = JSON.parse(localStorage.getItem("asistencia")) || []
    this.state.asistencia = asistencia

    let videoConstraints = null
    let camera = ""
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode,
      }
      if (facingMode === "user") {
        camera = "Front"
      } else {
        camera = "Back"
      }
    }

    return (
      <div
        className="Camera"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "#060806",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: WIDTH,
            height: HEIGHT,
            marginTop: "10px",
            boxSizing: "border-box",
            padding: "20px",
          }}>
          {!!videoConstraints ? (
            <div
              style={{
                position: "absolute",
                width: WIDTH,
                height: HEIGHT,
                overflow: "hidden",
                borderRadius: "20px",
              }}>
              <Webcam
                audio={false}
                width={WIDTH}
                height={HEIGHT}
                ref={this.webcam}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
          ) : null}
          {!!fullDesc ? (
            <DrawBox
              fullDesc={fullDesc}
              faceMatcher={faceMatcher}
              imageWidth={WIDTH}
              boxColor={"blue"}
            />
          ) : null}
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            paddingLeft: "40px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            height: "100%",
            boxSizing: "border-box",
            marginTop: "20px",
          }}>
          <div
            style={{
              width: "100%",
              height: "fit-content",
              backgroundColor: "#111412",
              borderRadius: "20px",
              boxSizing: "border-box",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
            }}>
            <h1
              style={{
                fontSize: "1.6rem",
                color: "#FFFFFF",
                fontFamily: "Viga",
                fontWeight: "regular",
              }}>
              TechDay - CASSA
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
                boxSizing: "border-box",
              }}>
              {asistencia.map((persona, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "20px",
                    borderBottom: "2px solid #1E2420",
                  }}>
                  <span
                    style={{
                      color: "#FFF",
                      fontSize: "1.2rem",
                      position: "relative",
                      display: "flex",
                    }}>
                    <span
                      style={{
                        color: "#000",
                        backgroundColor: "#68FF33",
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginRight: "20px",
                      }}>
                      {i + 1}
                    </span>
                    {persona.nombre}
                  </span>
                  <span
                    style={{
                      color: "#444D47",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}>{`${persona.fecha} - ${persona.hora}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CameraFaceDetect
