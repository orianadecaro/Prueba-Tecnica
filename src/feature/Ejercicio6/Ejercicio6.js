import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const Ejercicio6 = () => {
  const [producto, setProducto] = useState('');
  const [productos, setProductos] = useState([]);
  const [precio, setPrecio] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [buscar, setBuscar] = useState('');
  const [resultado, setResultado] = useState([]);


  const agregarProducto = (e) => {
    e.preventDefault();
    if (!producto.trim() || !precio.trim() || !codigo.trim() || !descripcion.trim()) {
      console.log('Sin producto');
      return
    }

    setProductos([
      ...productos,
      { producto: producto, codigo: codigo, descripcion: descripcion, precio: precio }
    ])

    setProducto('')
    setCodigo('')
    setPrecio('')
    setDescripcion('')
  };

  const eliminarProducto = (codigo) => {
    const remove = productos.filter(item => item.id !== codigo);
    setProductos(remove);
  }

  const buscarProducto = (e, codigo, descripcion) => {
    e.preventDefault();

    const busqueda = productos.filter(item => item.codigo === codigo || item.descripcion === descripcion);
    setResultado(busqueda)
  }
  return (
    <Layout>
      <div className='container mt-5'>
        <h3 className='mb-5 text-center'>Plasmar en código la creación de un listado de productos con una búsqueda por descripción y código. Se valora manejo de estados entre
          componentes y uso de hooks.
        </h3>
        <hr />
        <div className='col-4'>
          <h4 className='text-center'>Agregar Productos</h4>
          <form onSubmit={agregarProducto}>
            <input type='text'
              className='form-control mb-2'
              placeholder='Nombre producto'
              onChange={e => setProducto(e.target.value)}
              value={producto}
            />
            <input type='number'
              className='form-control mb-2'
              placeholder='Precio producto'
              onChange={e => setPrecio(e.target.value)}
              value={precio}

            />
            <input type='number'
              className='form-control mb-2'
              placeholder='Codigo producto'
              onChange={e => setCodigo(e.target.value)}
              value={codigo}

            />
            <input type='text'
              className='form-control mb-2'
              placeholder='Descripcion producto'
              onChange={e => setDescripcion(e.target.value)}
              value={descripcion}

            />
            <button className='btn btn-dark btn-block' type='submit' onClick={agregarProducto}>Agregar</button>
          </form>
        </div>
        <div className='row mt-4'>
          <div className='col-8'>
            <h4 className="text-center"> Lista de Productos</h4>
            <ul>
              {
                productos.length === 0 ? (
                  <li className='list-group-item'>No hay productos</li>
                ) : (
                  productos.map((item, key) => {
                    return (
                      <li className='list-group-item' key={key}>Producto:{item.producto} - Precio:${item.precio} - Codigo:{item.codigo} - Descripcion:{item.descripcion}
                        <button
                          className='btn btn-sm btn-danger float-end mx-2'
                          onClick={() => eliminarProducto(item.codigo)}
                        >X
                        </button>
                      </li>
                    )
                  })
                )
              }
            </ul>
          </div>
        </div>
        <div className='row mt-4'>
          <div className="col-8">
            <h4 className='text-center'> Busqueda</h4>
            <div className='input-group'>
              <input
                type='text'
                className='form-control text-center '
                placeholder='Buscar producto por descripcion o codigo'
                onChange={e => setBuscar(e.target.value)}
                value={buscar}
              />
              <button
                className='btn btn-sm btn-info'
                type='submit'
                onClick={buscarProducto}
              >Buscar
              </button>
            </div>
            <ul>
              {
                resultado.length === 0 ? (
                  <li className='list-group-item mt-3'>Resultado</li>
                ) : (resultado.map((item, key) => {
                  return (<li className='list-group-item' key={key}>{item.codigo} - {item.producto} - {item.precio} - {item.descripcion} </li>)
                }))

              }
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ejercicio6;