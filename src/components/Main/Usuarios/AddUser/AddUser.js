import React, {Component} from 'react';
// Redux
import {connect} from 'react-redux';
import { insertNewUser } from '../../../../state/actions/UsuariosActions';
import { Row, Input, Button, Modal } from "react-materialize";

import './AddUser.scss';

class AddUser extends Component{
    state = { 
        nombre: '',
        paterno: '',
        materno: '',
        edad: '',
        error: false
   }
    nombre = e => {
        this.setState({nombre: e.target.value });
    }
    paterno = e => {
        this.setState({paterno: e.target.value });
    } 
    materno = e => {
        this.setState({materno: e.target.value });
    }
    
    edad = e => {
        this.setState({edad: e.target.value });
    }   
    
    
    insertNewUser = e => {
        e.preventDefault();

        const { nombre, paterno, materno, edad} = this.state;
          
          if(nombre === '' || materno === '' || paterno === '' || edad === '') 
          {
               this.setState({error: true});
               return;
          } 
          this.setState({error: false})

          // Crear el objeto
          const User = {
                "nombre": nombre,
                "apellidos": {
                    "paterno": paterno,
                    "materno": materno
                    },
                "edad": edad
          }
        console.log(User);
          // crear el nuevo producto
          this.props.insertNewUser(User);
          
          

    }
    render(){
        const {error} = this.state;
        
        return(
            <div class = "addUser">
                <h1 className="AgregarUsuario-title">Agrega un Usuario</h1>
                    <form onSubmit={this.insertNewUser}>
                        <Row className= "AgregarUsuario-forms">
                            <Input onChange={this.nombre} type="text" s={12}  placeholder="Nombre" label="Nombre"  />
                            <Input onChange={this.paterno} type="text" s={6} placeholder="Apellido Paterno" label="Apellido Paterno"  />
                            <Input onChange={this.materno} type="text" s={6} placeholder="Apellido Materno" label="Apellido Materno" />
                            <Input onChange={this.edad} type="text" s={3} placeholder="Apellido Edad" label="Edad"  />
                        </Row>
                        <Button type= "submit"  waves='light' className = 'green accent-4'>Agregar Usuario</Button>
                    </form>

                    {error ? 
                        <Modal header='Error' trigger={<Button>Regresar</Button>}> Todos los campos son mandatorios  </Modal>
                          : ''
                   }
             </div>
        )

    }
    
}



export default connect(null, {insertNewUser})(AddUser);

