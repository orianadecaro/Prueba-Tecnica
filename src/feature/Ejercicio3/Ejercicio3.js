import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';

class Alumno {
  constructor(props) {
    this.nombre = props.nombre;
    this.edad = props.edad;
  }
  getEdad() {
    const mensaje = this.edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';

    return { edad: this.edad, mensaje };
  }
  getNombre() {
    return this.nombre;
  }
}

const Ejercicio3 = () => {
  const persona = new Alumno({ nombre: 'Pedro', edad: 32 });
  const [name, setName] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    const edad = persona.getEdad();
    setName(persona.getNombre());
    setAge(`${edad.edad} - ${edad.mensaje}`);
  }, []);

  return (
    <Layout>
      <h3 className='container mt-5 mb-5'>Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros
              dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)
      </h3>
      <div className='container mt-5 ' >
        <p>Nombre: {name} </p>
        <p>Edad: {age} </p>
      </div>
    </Layout>
  )
};

export default Ejercicio3;
