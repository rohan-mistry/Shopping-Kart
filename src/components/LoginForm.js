
import {credential} from './Dummy';
import Auth from './Auth';
import React, { Component } from 'react'
import AuthContext,{User} from './AuthContext';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
        }
        
        
    }
   static contextType=User;
    changeData=(event)=>{
        let NAME=event.target.name;
        let VALUE=event.target.value;
        this.setState({[NAME]:VALUE});
    }
    
    loginbutton=(event)=>{
        const { changeUser }=this.context;
        changeUser(this.state.name);
        credential.map((temp) =>{
            if(temp.username === this.state.name && temp.pwd === this.state.password)
            {     
                Auth.login(()=>{
                    this.props.history.push("/product")
                    
                });
            }
        })
        
    }
    render() {
       const { changeUser }=this.context;
       
        return (
               
                <div className="container-fluid" style={{display:"flex",justifyContent:"center"}}>
                    <form>
                        <div className="card shadow-lg" style={{marginTop:"100px",marginLeft:"60px",width:"500px"}} >
                            <div className="card-header text-center bg-info text-white ">
                                <h1 >Login</h1> 
                            </div>
                            <div className="card-body">
                                <div className="form-group ">
                                    <label htmlFor="uname">Username :</label>
                                    <input type="text" onChange={this.changeData} className="form-control" name="name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Password :</label>
                                    <input type="password" onChange={this.changeData} className="form-control" name="password"></input>
                                </div>
                                <button  onClick={this.loginbutton}  className="btn btn-success btn-block">Login</button>
                            </div>
                        </div>
                    </form>    
                </div>
           
        )
    }
}

export default LoginForm;

