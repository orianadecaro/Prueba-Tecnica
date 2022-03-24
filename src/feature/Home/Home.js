import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  
  return (
      <Layout>
          <div className='container mt-5'>
               <h1 className=' text-center mb-5'>Bienvenidos</h1>
               <h2><u>Resultados</u></h2>
               <div className='mt-4'>
                    <Link to="/ejercicio1" className="nav-link active"> Ejercicio 1 </Link>
                    <Link to="/ejercicio2" className="nav-link active"> Ejercicio 2 </Link>
                    <Link to="/ejercicio3" className="nav-link active"> Ejercicio 3 </Link>
                    <Link to="/ejercicio4" className="nav-link active"> Ejercicio 4 </Link>
                    <Link to="/ejercicio5" className="nav-link active"> Ejercicio 5 </Link>
                    <Link to="/ejercicio6" className="nav-link active"> Ejercicio 6 </Link> 
               </div>
          </div>
      </Layout> 
  )
}

export default Home