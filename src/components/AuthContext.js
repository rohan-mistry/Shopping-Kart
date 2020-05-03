import React, { Component,createContext } from 'react'

export const User = createContext();
class AuthContext extends Component {
    constructor(props)
    {
        super(props);
        this.state={
        username:''
    }
    }
    changeUser=(val)=>{
        this.setState({username:val})
    }
    render() {
        return (
            <div>
                <User.Provider value={{...this.state,changeUser:this.changeUser}}>
                    {this.props.children}
                </User.Provider>
            </div>
        )
    }
}

export default AuthContext
