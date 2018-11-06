import React, {Component} from 'react';

import { Button, Icon, Modal, Row, Input }from "react-materialize";

class UsuariosModal extends Component {

    

    render(){
        console.log(this.props);
        
        return(
            <div>
                <Modal
                    header='Actualizacion usuario'
                    trigger={<Button className='btn-floating green accent-4'><Icon small className=''>edit</Icon></Button>}
                    actions={
                                <div>
                                    <Button modal="close" waves="light" className="green accent-4">Actualizar</Button>
                                    <Button modal="close" waves="light" className="grey lighten-1">dismiss</Button>
                                </div>
                            }
                >
    
                    <Row>
                        <Input placeholder="Nombre" label="Nombre" s={12} defaultValue={this.props.user.nombre}/>
                        <Input placeholder="Apellido Paterno" label="Apellido Paterno" s={6} defaultValue={this.props.user.apellidos.paterno}/>
                        <Input placeholder="Apellido Materno" label="Apellido Materno" s={6} defaultValue={this.props.user.apellidos.materno}/>
                        <Input placeholder="Edad" label="Edad" s={1} defaultValue={this.props.user.edad}/>
                    </Row>
    
                </Modal>
            </div>
        )

    }

}

export default UsuariosModal;