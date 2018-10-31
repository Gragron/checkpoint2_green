import React, { Component } from "react";
import Menu from "../Navbar/Navbar";
import UsuariosTable from './UsuariosTable/UsuariosTable';

// 

import './Usuarios.scss'

class Usuarios extends Component {

    render(){
        return(

            <div>
                <Menu></Menu>
                <UsuariosTable></UsuariosTable>
            </div>

        )
    }

}

export default Usuarios;