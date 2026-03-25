import '../styles/contador.css'
import { useState } from "react"

function Contador (){

    const [contador, setContador] = useState(0)
//O contador inicial, é o valor atual. -> setContador é o valor atualizado.
    
function aumentar(){
    setContador (contador+1)
}
function diminuir (){
    setContador (contador-1)
}
    return(
        <div className="pag_contador">
            <h1>Contador</h1>

                <h3>{contador}</h3>

            <div> 
                <button onClick={aumentar}> + </button>
                
                <button onClick={diminuir}> - </button>
            </div>
        </div>
    )
}

export default Contador;




