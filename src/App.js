import React from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Public from './public';
import Protected from './protected';
import auth from "./auth"
import Pagenotfound from './pagenotfound';

function App() {
  return (
    <Router> 
    <div className="App">
     <Switch>
     <Route exact path="/" component={Public}/>
     <Route path="/protected" render={(props)=>{
        if(auth.checkAuthentication()){
          return <Protected {...props} />
        }else{
          return <Redirect to="/"/>
        }
     }}/>
   {/*   <Route to="*" component={Pagenotfound}/> */}
     </Switch>
    </div>
    </Router>
  );
}

export default App;
