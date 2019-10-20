import React, { Component } from 'react'
import auth from "./auth"

export default class Public extends Component {
    loginuser=()=>{
        auth.login(()=>{
            this.props.history.push("/protected")
        })
    }
    render() {
        console.log(auth);
        return (
            <div>
                <h1>This is Public Page ...... </h1>
                     <button onClick={this.loginuser}>Login</button>
            </div>
        )
    }
}
