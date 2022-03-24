import React from 'react';
import Layout from '../../components/Layout/Layout';

const Ejercicio5 = () => {
  return (
    <Layout>
      <div className='container mt-3 fs-5'>
        <h5> Dada la siguiente base de datos relacional: RESUELVA LAS SIGUIENTES CONSULTAS EN SQL:</h5>
        <br />
        <div className='fs-6 ' >
          <h6>Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)</h6>
          <p><small>SELECT nombres from empleados ORDER BY nombre DESC;</small></p>
          <hr />
          <h6>Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.</h6>
          <p> <small>SELECT nombre, puesto, localidad from empleados
            INEER JOIN departamentos ON localidad_id = empleados.departemento_ID
            INNER JOIN localidades ON localidad = departamentos.localidad_ID
            INNER JOIN puestos ON puesto = empleados.puesto_ID WHERE puesto = soporte;
          </small></p>
          <hr />
          <h6>Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.</h6>
          <p><small>SELECT nombres from empleados WHERE nombre LIKE %_o; </small></p>
          <hr />
          <h6>Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.</h6>
          <p><small>SELECT nombre, puesto, sueldo from empleados
            INEER JOIN departamentos ON localidad_id = empleados.departemento_ID
            INNER JOIN localidades ON localidad = departamentos.localidad_ID WHERE localidad = carlos paz
            INNER JOIN puestos ON puesto = empleados.puesto_ID </small>; </p>
          <hr />
          <h6>Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.</h6>
          <p> <small>SELECT nombre, localidad, sueldo from empleados WHERE sueldo BETWEEN 10000 AND 13000
            INEER JOIN departamentos ON localidad_id = empleados.departemento_ID
            INNER JOIN localidades ON localidad = departamentos.localidad_ID; </small></p>
          <hr />
          <h6>Visualizar los departamentos con más de 5 empleados</h6>
          <p> <small> SELECT  departamento from departamentos
            INNER JOIN departamentos ON denominacion = empleados.departemento_ID  
                WHERE >5 empleados; </small></p>
          <hr />
          <h6>Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.</h6>
          <p> <small> SELECT nombre fom empleados
            INEER JOIN departamentos ON localidad_id = empleados.departemento_ID
            INNER JOIN localidades ON localidad = departamentos.localidad_ID  WHERE localidad = cordoba
            INNER JOIN puestos ON puesto = empleados.puesto_ID WHERE puesto = analista OR programador;</small></p>
          <hr />
          <h6>Calcula el sueldo medio de todos los empleados.</h6>
          <p><small> SELETC avg(sueldo) from empleados; </small></p>
          <hr />
          <h6>¿Cuál es el máximo sueldo de los empleados del departamento 10?</h6>
          <p> <small>SELECT max(sueldo) from empleados
            INEER JOIN departamentos ON localidad_id = empleados.departemento_ID
            WHERE  departamento_id = 10 ;</small></p>
          <hr />
          <h6>Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.</h6>
          <p> <small>SELECT min(sueldo) from empleados
            INEER JOIN departamentos ON localidad_id = empleados.departemento_ID
            WHERE departamentos = soporte ;</small></p>
          <hr />
          <h6>Para cada puesto obtener la suma de sueldos.</h6>
          <p><small>SELECT sum(sueldo) from empleados
            INNER JOIN puestos ON puesto = empleados.puesto_ID; </small></p>
        </div>
      </div>
    </Layout>
  )
}

export default Ejercicio5;