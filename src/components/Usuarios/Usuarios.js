import React, { Component } from "react";
import Menu from "../Navbar/Navbar";

// 
import { Table } from 'react-materialize'
import './Usuarios.scss'
import { Card, Button }from "react-materialize";

class Usuarios extends Component {

    render(){
        return(

            <div>
                <Menu></Menu>
                <h4 className="border-b m-20 pb-5"> 
                    Usuarios
                    <Button floating large className='green accent-4' waves='light' icon='add' />
                </h4>

                <div className="usuarios-container">
                    <Card className="usuarios-card">
                        <Table>
                            <thead>
                                <tr>
                                <th data-field="id">Name</th>
                                <th data-field="name">Item Name</th>
                                <th data-field="price">Item Price</th>
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

            </div>

        )
    }

}

export default Usuarios;