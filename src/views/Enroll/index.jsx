import Head from "../../components/Head";
import BgDot from "../../components/BgDot";
import React, { useState } from "react";

const Enroll = () => {
  const [files, setFiles] = useState([]);
  const maxFiles = 10;

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files).slice(0, maxFiles));
  };

  const handleProcessFiles = () => {
    // Lógica para procesar las fotografías
    console.log("Procesar fotografías", files);
  };

  return (
    <div
      className="w-full h-screen box-border overflow-y-scroll overflow-x-hidden relative"
      style={{
        background: `linear-gradient(135deg, #67096D 0%, #1A0242 35%, #000000 70%)`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <BgDot />
      <Head />
      <div className="p-8 relative z-20">
        <h1 className="text-white text-2xl">Enrolamiento</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg col-span-1 relative z-10">
            <h2 className="text-white text-lg mb-4">Cargar archivos</h2>
            <p className="text-gray-400 mb-4">Puede cargar un máximo de 10 archivos</p>
            <div className="mb-4">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer inline-block text-center"
              >
                Elegir archivos
              </label>
              <p className="text-gray-400 mt-2">{files.length} archivos seleccionados</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-4 h-32 overflow-y-auto">
              <ul className="text-gray-300">
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleProcessFiles}
              className="bg-green-500 text-white py-2 px-4 rounded-full w-full flex items-center justify-center"
            >
              Procesar fotografías
              <span className="material-symbols-outlined ml-2">settings</span>
            </button>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg col-span-3 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg">Log de acciones</h2>
              <button className="bg-gray-700 text-white p-2 rounded-full">
                Pendiente
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg h-48 overflow-y-auto">
              {/* Aquí se mostrarán los logs de acciones */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
