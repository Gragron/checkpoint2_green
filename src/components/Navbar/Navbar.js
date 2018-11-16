import React from 'react';
import { Navbar , Icon } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const Menu  = () => {

    return(
        <div>
            <Navbar left className = 'green accent-4'>       
                <li><NavLink to="/" title='Inicio'><Icon medium>home</Icon></NavLink></li>
                <li><NavLink to="/AddUser" title='Agregar Usuario'><Icon medium>person_add</Icon></NavLink></li>
            </Navbar>
        </div>
    )

}

export default Menu;