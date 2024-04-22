import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AgregarEmpleado() {
    let navegacion = useNavigate();
    const [empleado, setEmpleado]=useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const{nombre,departamento,sueldo}=empleado

    const onInputChange=(e)=>{
        //spread operator ...(expandir los atributos)
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit= async(e)=>{
        e.preventDefault();
        const urlBase="http://localhost:8088/empleado";
        await axios.post(urlBase,empleado);
        //Redirigimos a la pagina de inicio
        navegacion('/');
    }


  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registrar empleado
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e)=> onSubmit(e)}>
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e)=>onInputChange(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="departamento"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Departamento
              </label>
              <div className="mt-2">
                <input
                  id="departamento"
                  name="departamento"
                  type="text"
                  required
                  value={departamento}
                  onChange={(e)=>onInputChange(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="sueldo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sueldo
              </label>
              <div className="mt-2">
                <input
                  id="sueldo"
                  name="sueldo"
                  type="number"
                  required
                  value={sueldo}
                  onChange={(e)=>onInputChange(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="text-center flex space-x-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div className="bi bi-floppy"> Agregar</div>
              </button>

              <a
                href="/"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Regresar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
