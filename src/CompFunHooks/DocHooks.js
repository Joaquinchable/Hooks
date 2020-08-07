// import React, {useState, useEffect} from 'react'


// const DocHooks = () => {
//     const[twitter , setTwitter] = useState(0);   // ya declaro mi estado incial y el modificador de mi estado
   
//    // useEffect() recibe informacion de lo que se va modificar 
//    // podemos ver a useEffect como el embudo donde pasara todo el agrane para que la informacion se modifique 
//    // hablamos de que en el estaran la informacion a modificar, la funcion o metodo para que se modifique y 
//   // el accion === [] para que esa informacion se renderize 

//    useEffect(() => { 

    
//     // Aqui por ejemplo podemos poner un Api y bajar informacion
//    // la contabilidad de cuantas veces se ha compartido una nota en TWitter,

//    const valor = cuantasVecesSeHaCompartido() // es decirme cuantas veces se compartio 
//    //     // Modificamos el valor "cuenta" (por que en cuenta guardamos el valor modificado )
//    //     // para modificar dicho valor la funcion es setTwitter()


//    setTwitter(valor)// esta funcion modifica la informacion de valor

// //     // como queremos que esta modificacion solo ocurra cuando el componente  ha sido montado 
// //     // emulando el componentDidMount , le pasamos a useEffect un segundo paramatro que es un arreglo vacio.
 

//     }, [ ])    // <===== renderizar la infromacion

//     return (
//         <div>
//             <p>Esta nota se ha  compartido en Twitter  {twitter}  veces</p>
//         </div>
//     )
// }



// export default DocHooks;
