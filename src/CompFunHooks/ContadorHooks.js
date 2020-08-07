import React, {useState} from 'react';

function ContadorHooks() {
    const[contador, setContador]= useState(0); // useState() es cuando  declaro mi estado inicial  y tmabien es la menera en yo motifico mi estado 
    
    
    return (
        <div>

               el contador comienza en : {contador}  
                

                <button
                 onClick={() => setContador(contador + 10)}      
                >

                 Aumentar Cuenta

                </button>
           
                

        </div>
    )
}


export default ContadorHooks;