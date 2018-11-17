import React, { Component } from 'react';

// Materialize
import { Card } from 'react-materialize';

// Actions
import { connect } from 'react-redux';
import { getUser } from '../../../../state/actions/UsuariosActions';

class ShowUser extends Component{

    componentDidMount(){  
        this.props.getUser(this.props.match.params.id);
    }

    render(){

        return(
    
            <div>
                <Card 
                    title="Informacion de Usuario"
                >
                    
                    {console.log('user id', this.props.users.users._id )}
                    {console.log('user nombre', this.props.users.users.nombre )}
                    {console.log('user apellidos', this.props.users.users.apellidos )}
            
                    {
                        // this.props.users.map(user => {
                        //     return (
                        //         <p>{user.apellidos}</p>
                        //     )
                        // })
                    }

                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getUser
}

const mapStateToProps = (state) => {
    return {
        ...state,
        users: state.users
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShowUser);