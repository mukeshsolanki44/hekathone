import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Login,Signup,Home,FirstPage,Verification,Contact,MapPage,Slider} from '../../Containers'

export default class AppRouter extends React.Component{

    render(){
        return(
            <Router>
                <div>
                <Route exact path="/" component={FirstPage} />
                    <Route exact path="/Login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/home" component={Home} />
                    <Route path="/verification" component={Verification} />
                      <Route path="/map" component={MapPage} />
                     <Route path="/slider" component={Slider} />
                   </div>
            </Router>
        )
    }
}