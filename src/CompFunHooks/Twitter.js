import React, { useState, useEffect } from "react";

// Esta función es la simulación de traer la información de cuántas veces ha
// sido compartida un mensaje en Twitter

function getShared() {
  return 10000;
}

function Twitter() {
  const [count, setCount] = useState(0); //  es  como inicia mi estado y tambien como lo actuliza

  // en useEffect es donde se modifica toda mi informacion

  useEffect(() => {
    const reTwitts = getShared(); // me dice cuantas veces se ha modificado o se a compartido el tiwtt

    setCount(reTwitts); // ok yo lo modifico
  }, []); // ok cuando termines de modificarlo yo lo renderizo

  return (
    <div>
      <p>tu Twitt a sido retwitiado : {count} </p> 
    </div>
  );
}
export default Twitter;
