import Head from "../../components/Head";
import BgDot from "../../components/BgDot";
import React, { useState } from "react";

const AttendanceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const attendees = [
    "Diego Armando Villalobos Villalta",
    "Erick Balmore Galdamez Salazar",
    "Freddy Jesus Aguilar",
    "Gerardo Antonio Robles Chapeton",
    "Irma Lisseth Rico Giron",
    "Manuel Alejandro Rivera Saravia",
    "Oscar Geovani Garay Custodio",
    "Rodrigo Alejandro Romano Quezada",
    "Romeo Adonay Cabrera Barahona",
    "Sonia Evelyn Ramirez Espinola",
    
  ];

  const filteredAttendees = attendees.filter(attendee =>
    attendee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black bg-opacity-50 p-4 rounded-lg mt-4 relative z-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-green-400">Listado ({filteredAttendees.length})</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 text-white p-2 pl-10 pr-4 rounded-full"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
          </div>
        </div>
        <button className="text-green-400 hover:text-green-500">
          <span className="material-symbols-outlined">refresh</span>
        </button>
      </div>
      <ul>
        {filteredAttendees.map((attendee, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-700"
          >
            <span className="text-white">{attendee}</span>
            <span className="text-gray-500">01/07/2024 - 15:45:12</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Attendance = () => {
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
      <div className="p-8 relative z-10">
        <h1 className="text-white text-2xl">Asistencia</h1>
        <AttendanceList />
      </div>
    </div>
  );
};

export default Attendance;
