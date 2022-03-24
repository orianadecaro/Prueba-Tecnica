import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';


class Operario {
  constructor(props) {
    this.sueldo = props.sueldo;
    this.nombre = props.nombre;
  }
  getSueldo() {
    return this.sueldo;
  }
  getNombre() {
    return this.nombre;
  }
}

const Ejercicio2 = () => {
  const [operarios, setOperarios] = useState([]);
  const [empleadoSueldo, setEmpleadoSueldo] = useState('');
  const [empleadoNombre, setEmpleadoNombre] = useState('');


  const agregar = (e) => {
    e.preventDefault();

    console.log(e)

    const persona = new Operario({ sueldo: empleadoSueldo, nombre: empleadoNombre });

    setOperarios([
      ...operarios,
      persona
    ]);
    setEmpleadoSueldo('');
    setEmpleadoNombre('');
  
  }


  return (
    <Layout>
      <div className='container mt-5'>
        <h2 className=' mb-5'>
          Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un
          método para imprimir el vector.
        </h2>
        <div className='mb-5'>
          <input type='text'
            placeholder='Nombre operario'
            className='mb-1 row'
            value={empleadoNombre}
            onChange={(e) => setEmpleadoNombre(e.target.value)} />
          <input type='number'
            placeholder='Sueldo'
            className='mb-1 row'
            value={empleadoSueldo}
            onChange={(e) => setEmpleadoSueldo(e.target.value)} />
          <button type='submit'
            className='btn btn-dark btn-block'
            onClick={agregar}>Agregar</button>
        </div>
        <h3><u>Sueldos de Operarios</u></h3>
        <div>
          <ul>
            {
              operarios.map((operario, key) => {
                return (<li key={key}> Operario: {operario.getNombre()} - Sueldo: ${operario.getSueldo()} </li>)
              })
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
}


export default Ejercicio2;