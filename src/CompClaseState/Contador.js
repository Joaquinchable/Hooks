import React, { Component } from 'react';

class Contador extends Component {

    state = {            // state es cuando  declaro mi estado inicial 

        contador:0
    };

    render() {
        return (
            <div>
                el contador comienza en : {this.state.contador}  
                

                <button
                 onClick={() => this.setState({contador: this.state.contador + 10})}      // setState() la menera en yo motifico mi estado 
                >

                 Aumentar Cuenta

                </button>
            </div>
        )
    }
}


export default Contador;