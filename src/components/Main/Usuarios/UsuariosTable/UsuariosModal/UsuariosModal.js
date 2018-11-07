import React, {Component} from 'react';
import { connect } from 'react-redux';

// Components Materialize
import { Button, Icon, Modal, Row, Input }from "react-materialize";
import { putUsers } from '../../../../../state/actions/UsuariosActions';

// Actions


class UsuariosModal extends Component {

    state = {
        nombre: "",
        paterno: "",
        materno: "",
        edad: "",
    }

    handleChangeUser = (input, event) => {
        // cambios dinamicos de una propiedad del state
        if(!input.state[input]) return false;
        let newState = {};
        newState[input] = event.target.value;
        this.setState(newState);
    }

    handleClickPutUser = (user) => {
        console.log(user);

        // let putUser = {
        //             "nombre": "Kevin",
        //             "apellidos": {
        //                 "paterno": "Navajas",
        //                 "materno": "Cuchillin"
        //                 },
        //             "edad": 18
        //             }

        //  let _id = '5bd9fce67d4d7200158a2c5b'

        // console.log(putUser);        
        // this.props.putUsers(putUser,_id);
    }

    render(){

        // console.log(this.props);
        
        return(
            <div>
                <Modal
                    header='Actualizacion usuario'
                    trigger={<Button className='btn-floating green accent-4'><Icon small className=''>edit</Icon></Button>}
                    actions={
                                <div>
                                    <Button onClick={() => this.handleClickPutUser(this.props.user._id)} modal="close" waves="light" className="green accent-4">Actualizar</Button>
                                    <Button modal="close" waves="light" className="grey lighten-1">dismiss</Button>
                                </div>
                            }
                >
    
                    <Row>
                        <Input onChange={(e) => this.onChange('nombre',e) } placeholder="Nombre" label="Nombre" s={12} defaultValue={this.props.user.nombre}/>
                        <Input onChange={(e) => this.onChange('paterno',e) } placeholder="Apellido Paterno" label="Apellido Paterno" s={6} defaultValue={this.props.user.apellidos.paterno}/>
                        <Input onChange={(e) => this.onChange('materno',e) } placeholder="Apellido Materno" label="Apellido Materno" s={6} defaultValue={this.props.user.apellidos.materno}/>
                        <Input onChange={(e) => this.onChange('edad',e) } placeholder="Edad" label="Edad" s={1} defaultValue={this.props.user.edad}/>
                    </Row>
    
                </Modal>
            </div>
        )

    }

}

const mapDispatchToProps = {
    putUsers,
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsuariosModal);