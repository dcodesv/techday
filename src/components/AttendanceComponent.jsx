import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './AttendanceComponent.css';

const AttendanceComponent = () => {
  const [step, setStep] = useState(1); // 1: Reconocimiento, 2: Procesando, 3: Confirmación
  const [userData, setUserData] = useState(null);

  const handleCapture = async () => {
    setStep(2);
    setTimeout(() => {
      setUserData({
        id: '50907',
        name: 'Diego Armando Villalobos Villalta',
        role: 'Desarrollador de Software'
      });
      setStep(3);
    }, 100); // Simula un tiempo de espera para el procesamiento
  };

  return (
    <div className="attendance-container">
      {step === 1 && (
        <div className="recognition-view">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            width="100%"
            height="100%"
          />
          <div className="user-info">
            {userData && (
              <>
                <p>{userData.name}</p>
                <p>{userData.role}</p>
              </>
            )}
          </div>
          <button onClick={handleCapture}>Guardar asistencia</button>
          <button onClick={() => setStep(2)}>Cancelar</button>
        </div>
      )}
      {step === 2 && (
        <div className="processing-view">
          <p>Escaneando...</p>
          <img src="path/to/processing-image.png" alt="Escaneando" />
        </div>
      )}
      {step === 3 && (
        <div className="confirmation-view">
          <p>¡Bienvenido {userData.name}!</p>
          <p>Tu asistencia fue validada</p>
        </div>
      )}
    </div>
  );
};

export default AttendanceComponent;
