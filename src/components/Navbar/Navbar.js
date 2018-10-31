import React from 'react';
import { Navbar , Icon } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const Menu  = () => {

    return(
        <Navbar left className = 'green accent-4'>       
            <li><NavLink to="/"><Icon medium>home</Icon></NavLink></li>
            <li><NavLink to="/dependiente"><Icon medium>person_add</Icon></NavLink></li>
        </Navbar>
    )

}

export default Menu;