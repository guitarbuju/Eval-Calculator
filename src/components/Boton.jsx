import React from 'react'
import '../Hojas-de-estilos/Boton.css'

const Boton = (props) => {

    const esOperador=(valor)=>{
        return isNaN(valor) &&( valor !== '.') &&(valor !== '=')
    }

  return (
    <div className={`boton-contenedor ${esOperador(props.children)? 'operador':null}`}
    onClick={()=>props.manejaClick(props.children)}>{props.children}
    </div>
  )
}

export default Boton