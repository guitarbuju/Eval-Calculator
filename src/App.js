
import './App.css';
import nuclio from './imagenes/nuclio.jpeg'
import Boton from './components/Boton.jsx'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react';

function App() {

  const [input, setinput] = useState('')
  
  const agregaValor=(valor)=>{
    setinput(input+valor)
  }
  const borralo=(valor)=> setinput(valor)

   const resultado=()=>{
     setinput(eval(input))
   }


  
  return (
    <div className="App">
     <div className='logo-contenedor'>
      <img alt='logo'
        src={nuclio}
        className='logo'
      />

     </div>
     <div className='calc-contenedor'>
        <Pantalla input={input}/>
        <div className='fila'> 
          <Boton manejaClick={agregaValor}>1</Boton> 
          <Boton manejaClick={agregaValor}>2</Boton>
          <Boton manejaClick={agregaValor}>3</Boton>
          <Boton manejaClick={agregaValor}>+</Boton>
        
        </div>
        <div className='fila'>
          <Boton manejaClick={agregaValor}>4</Boton> 
          <Boton manejaClick={agregaValor}>5</Boton>
          <Boton manejaClick={agregaValor}>6</Boton>
          <Boton manejaClick={agregaValor}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejaClick={agregaValor}>7</Boton> 
          <Boton manejaClick={agregaValor}>8</Boton>
          <Boton manejaClick={agregaValor}>9</Boton>
          <Boton manejaClick={agregaValor}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejaClick={resultado}>=</Boton> 
          <Boton manejaClick={agregaValor}>0</Boton>
          <Boton manejaClick={agregaValor}>.</Boton>
          <Boton manejaClick={agregaValor}>/</Boton>
        </div>      
        <div className='fila'>
          <BotonClear clearScreen={borralo}>Clear</BotonClear>
        </div>
    </div>           
    </div>
  );
}

export default App;
