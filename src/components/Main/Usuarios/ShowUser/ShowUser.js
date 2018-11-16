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
                    
                    {/* {console.log('show user', this.props.users.users )} */}
            
                    {
                        this.props.users.users.map(user => {
                            return (
                                <p>{user.nombre}</p>
                            )
                        })
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
        users: state.users
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShowUser);