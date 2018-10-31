import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-materialize'
import { Card, Button }from "react-materialize";

// import my action component
import { fetchUsers } from '../../../state/actions/UsuariosActions';

class UsuariosTable extends Component{

    componentDidMount(){
        this.props.fetchUsers();
    }

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
                                    {
                                        console.log(this.props.users)
                                    }
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </div>
        )
    }

}


const mapDispatchToProps = {
    fetchUsers,
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsuariosTable);