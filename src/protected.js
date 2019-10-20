import React, { Component } from 'react'
import auth from "./auth"

export default class Protected extends Component {
    logoutuser=()=>{
        auth.logout(()=>{
            this.props.history.push("/")
        })
    }
    render() {
        return (
            <div>
                <h1>This is Protected Page ...... </h1>
                     <button onClick={this.logoutuser}>logout</button>
            </div>
        )
    }
}
