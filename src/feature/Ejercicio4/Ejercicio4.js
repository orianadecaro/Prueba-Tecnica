import React, { useEffect } from 'react';

import Layout from '../../components/Layout/Layout';

const Ejercicio4 = () => {

  const x = ["n", "bro", "c", "|"];

  const y = ["d", "n", "l", "bro", "g"];


  useEffect(() => {
    console.log(y.filter(i => !x.includes(i)))
  })

  return (
    <Layout>
      <div className='container mt-5 mb-5 '>
        <h3 className='mb-5' >
          Dados los siguientes array, imprimir por <u>consola</u> los elementos del array “y” que no se encuentran en el array “x” utilizando
          para tal fin una única línea de código.
        </h3>
        <p>   const x = ["n", "bro", "c", "|"];</p>
        <p> const y = ["d", "n", "l", "bro", "g"];</p>
      </div>
    </Layout>

  )
}
export default Ejercicio4;