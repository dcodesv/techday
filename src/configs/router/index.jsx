import { createBrowserRouter } from "react-router-dom"
// import FaceRecognition from "../../views/faceRecognition"
import Enroll from "../../views/Enroll"
import Attendance from "../../views/Attendance"
import CameraFaceDetect from "../../views/cameraFaceDetect"
import FaceRecognition from '../../views/FaceRecognition'

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
    {
      path: '/face',
      element: <FaceRecognition/>
    }
  ],
  {
    basename: "/techday",
  }
)

export default router
