import React from "react";

export default function Navegacion() {
  return (
    <div className="bg-green-300 w-dvw h-14 flex sm:flex-row flex-col">
      <a
        href="/"
        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm flex items-center font-bold"
      >
        Inicio<i className="ml-1 bi bi-house"></i>
      </a>
      <a
        href="/agregar"
        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm flex items-center font-bold"
      >
        Agregar empleado
      </a>
    </div>
  );
}
