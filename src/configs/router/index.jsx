import { createBrowserRouter } from "react-router-dom"
// import FaceRecognition from "../../views/faceRecognition"
import Enroll from "../../views/Enroll"
import Attendance from "../../views/Attendance"
import CameraFaceDetect from "../../views/cameraFaceDetect"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div className="text-red-800">Hello world!</div>,
    },
    {
      path: "/enroll",
      element: <Enroll />,
    },
    {
      path: "/detect",
      element: <CameraFaceDetect />,
    },
    {
      path: "/attendance",
      element: <Attendance />,
    },
  ],
  {
    basename: "/techday",
  }
)

export default router
