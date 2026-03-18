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
        <div>
            <h1>Contador</h1>

                <h2>{contador}</h2>

            <div> 
                <button onClick={aumentar}> + </button>
                
                <button onClick={diminuir}> - </button>
            </div>
        </div>
    )
}

export default Contador;



