import React, { Component } from "react";
import UsuariosTable from './UsuariosTable/UsuariosTable';


import './Usuarios.scss'

class Usuarios extends Component {

    render(){
        return(

            <div>
                <UsuariosTable></UsuariosTable>
            </div>

        )
    }

}

export default Usuarios;