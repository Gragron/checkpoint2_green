import React, { Component } from 'react';

import { Table } from 'react-materialize'
import { Card, Button }from "react-materialize";

class UsuariosTable extends Component{

    render(){
        return(
            <div className="usuarios-container">
                    <h4 className="usuarios-title border-b m-20 pb-5"> 
                        Usuarios
                        <Button floating className='green accent-4 mlr-15' waves='light' icon='add' />
                    </h4>
                    <Card className="usuarios-card">
                        <Table>
                            <thead>
                                <tr>
                                <th data-field="name">Nombre</th>
                                <th data-field="name">Apellido Paterno</th>
                                <th data-field="first-surname">Apellido Materno</th>
                                <th data-field="second-surname">Edad</th>
                                <th data-field="action">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    <td>$3.76</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    <td>$7.00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </div>
        )
    }

}


export default UsuariosTable;