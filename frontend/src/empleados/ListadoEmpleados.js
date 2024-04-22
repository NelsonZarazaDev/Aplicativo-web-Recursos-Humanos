import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8088/empleado";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    setEmpleados(resultado.data);
  };

  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  };

  return (
    <div className="container w-screen">
      <div className="container text-center m-6">
        <h1 className="text-3xl font-bold">Sistema de recursos humanos</h1>
      </div>

      <table className="table-auto border-separate border-spacing-2 border border-slate-500 m-auto">
        <thead className="bg-emerald-800">
          <tr>
            <th className="border border-slate-600 text-white p-3">Id</th>
            <th className="border border-slate-600 text-white p-3">Nombre</th>
            <th className="border border-slate-600 text-white p-3">
              Departamento
            </th>
            <th className="border border-slate-600 text-white p-3">Sueldo</th>
            <th className="border border-slate-600 text-white p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            //Iteramos el arreglo de empleados
            empleados.map((empleado, indice) => (
              <tr key={indice}>
                <td className="border border-slate-600 text-center">
                  {empleado.idEmpleado}
                </td>
                <td className="border border-slate-600 p-2">
                  {empleado.nombre}
                </td>
                <td className="border border-slate-600 p-2">
                  {empleado.departamento}
                </td>
                <td className="border border-slate-600 p-2">
                  <NumericFormat //Agregar formto usando componente
                    value={empleado.sueldo} //A cada atributo
                    displayType="text" //de tipo texto
                    thousandSeparator="," //separador de miles
                    prefix="$" //prefijo, simbolo de dolar
                    decimalScale={2} //Muestra los decimales .00
                    fixedDecimalScale //Ayuda a mostrar los decimales correctamente
                  />
                </td>
                <td className="border border-slate-600 text-center">
                  <div className="flex p-2">
                    <Link
                      to={`/editar/${empleado.idEmpleado}`}
                      className="bg-amber-500 p-0.5 w-11 mr-4 bi bi-pencil-square"
                    ></Link>
                    <button
                      onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                      className="bg-red-500 p-0.5 w-11 bi bi-trash"
                    ></button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
