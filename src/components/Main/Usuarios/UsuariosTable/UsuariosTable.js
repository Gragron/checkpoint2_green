import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-materialize'
import { Card, Button, Icon }from "react-materialize";

// import my action component
import { fetchUsers } from '../../../../state/actions/UsuariosActions';

class UsuariosTable extends Component{

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){

        let usersList;

        if (this.props.users.users.length){
            usersList = this.props.users.users.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellidos.paterno}</td>
                                    <td>{user.apellidos.materno}</td>
                                    <td>{user.edad}</td>
                                    <td className='center-align'>
                                        <Icon small className='mlr-15 green-text text-accent-4'>visibility</Icon>
                                        <Icon small className='mlr-15 green-text text-accent-4'>edit</Icon>
                                        <Icon small className='mlr-15 green-text text-accent-4'>delete</Icon>
                                    </td>
                                </tr>
                            )
                        })
        }else{
            usersList = 
                    <tr >
                        <td colSpan='4' className='center-align'> Sin usuarios </td>
                        <td className='center-align'>
                            <Icon small className='mlr-15 green-text text-accent-4'>visibility</Icon>
                            <Icon small className='mlr-15 green-text text-accent-4'>edit</Icon>
                            <Icon small className='mlr-15 green-text text-accent-4'>delete</Icon>
                        </td>
                    </tr>

        }


        return(
            <div className="usuarios-container">
                    <h4 className="usuarios-title border-b m-20 pb-5"> 
                        Usuarios
                        <Button floating className='green accent-4 mlr-15' waves='light' icon='add' />
                    </h4>
                    <Card className="usuarios-card">
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th data-field="name">Nombre</th>
                                    <th data-field="name">Apellido Paterno</th>
                                    <th data-field="first-surname">Apellido Materno</th>
                                    <th data-field="second-surname">Edad</th>
                                    <th data-field="action" className='center-align'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList}
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