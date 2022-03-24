import React from "react";
import Layout from '../../components/Layout/Layout';

const Ejercicio1 = () => {
    var num;
    var numImpar = [];

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 1) {
            num = i;
            numImpar.push(num);
        }
    }
    return (
        <Layout>
            <div className='container mt-5 '>
                <h3 className="mb-5 text-center"> Crear un algoritmo que muestre los números impares entre el 0 y el 100 </h3>
                <h5><u>Resultado</u></h5>
                <ul className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        numImpar.map((index, key) => {
                            return (<li key={key}> {index} </li>)
                        })
                    }
                </ul>
            </div>
        </Layout>
    );
}

export default Ejercicio1;