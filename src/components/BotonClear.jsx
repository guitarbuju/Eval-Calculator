import React from 'react'
import '../Hojas-de-estilos/BotonClear.css'

const BotonClear = (props) => {
  return (
    <div className='boton-clear'
    onClick={()=>props.clearScreen('')}>Clear
    </div>
  )
}

export default BotonClear