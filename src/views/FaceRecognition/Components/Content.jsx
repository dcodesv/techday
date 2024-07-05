import RobotEscaneando from "../../../assets/robot-escaneando.png";
import { useEffect, useState } from "react";
import { MaterialSymbol } from "react-material-symbols";

const Content = () => {
  const [step, setStep] = useState(1); // 1: Reconocimiento, 2: Procesando, 3: Confirmación
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (step === 1) {
      setTimeout(() => {
        setStep(2);
      }, 5000);
    } else if (step === 2) {
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(interval);
            setStep(3);
            return 100;
          }
          return Math.min(oldProgress + 10, 100);
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleCancel = () => {
    setStep(1);
    setProgress(0);
  };

  return (
    <div className="w-full flex justify-center items-center flex-1 z-10">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 onCancel={handleCancel} progress={progress} />}
      {step === 3 && <Step3 />}
    </div>
  );
};

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
  );
};

const Step2 = ({ onCancel, progress }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8">
      <h1 className="text-[#68FF33] text-xl">¿Eres tú?</h1>
      <p className="text-white text-lg">Diego Armando Villalobos Villalta</p>
      <p className="text-white text-lg">Desarrollador de Software</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={onCancel}
      >
        Cancelar
      </button>
    </div>
  );
};

const Step3 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8">
      <MaterialSymbol icon="check_circle" size={48} color="#68FF33" />
      <p className="text-white text-lg">Tu asistencia fue validada</p>
      <h1 className="text-[#68FF33] text-xl">¡Bienvenido Diego!</h1>
    </div>
  );
};

export default Content;
