import RobotEscaneando from "../../../assets/robot-escaneando.png"
import { useEffect, useState } from "react"

const Content = () => {
  const [step, setStep] = useState(1) // 1: Reconocimiento, 2: Procesando, 3: Confirmación

  useEffect(() => {
    setTimeout(() => {
      setStep(2)
    }, 5000)
  }, [])

  return (
    <div className="w-full flex justify-center items-center flex-1 z-10">
      {step == 1 && <Step1 />}
      {step == 2 && <Step2 />}
    </div>
  )
}

const Step1 = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-8">
      <img
        src={RobotEscaneando}
        alt="Robot escaneando"
        className="w-32 sm:w-36 md:w-48 animate-customBounce"
      />
      <p className="text-white text-center text-lg sm:text-xl md:text-2xl animate-pulse">
        Escaneando...
      </p>
    </div>
  )
}

const Step2 = () => {
  return <h1 className="text-white text-xl">Step2</h1>
}

export default Content
