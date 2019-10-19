import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '../../Components/TextField/textfield'
import Button from '@material-ui/core/Button';
import Appbar from '../../Components/Appbar/appBar'
import {Login} from './../../Config/Store/action'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBAnimation } from 'mdbreact';
import FirebaseApp from './../../Config/Firebase/firebase'



class UserLogin extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
        this.textInput1 = React.createRef()
        this.textInput2 = React.createRef()
    }

    LoginFunc=()=>{
        if(this.state.email===""){
            this.textInput1.current.setFocus()
        }
        else if (this.state.password===""){
            this.textInput2.current.setFocus()
        }
        else{
            this.props.sendData(this.state,this.props.history)
        }
    }

componentDidMount=()=>{
  FirebaseApp.auth().onAuthStateChanged((user)=>{
    if(user){
       if(user.emailVerified===true){
         this.props.history.push("/home");
       }
       else{
        this.props.history.push("/verification");
       }
    }
    else{
      this.props.history.push("/login");    
    }
  })
}


    render(){
        return(
            <div>
                            <br/><br/><br/>
  <MDBContainer>
    <MDBAnimation type="slideInRight">

      <MDBRow center>
        <MDBCol md="6" lg="5">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">
                  <MDBInput
                    ref={this.textInput1}
                     onChange={(e)=>this.setState({email:e.target.value})}
                     label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    />

                  <MDBInput
                    ref={this.textInput2}
                    onChange={(e)=>this.setState({password:e.target.value})}
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="button" onClick={()=>this.LoginFunc()}>
                    Login
                  </MDBBtn>

                </div>
              <div style={{textAlign:"center"}}>Here <Link to="/signup">Sign Up </Link> </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
</MDBAnimation>
    </MDBContainer>
    <div id="snackbar" className={this.props.snackBar} >{this.props.LoginMessage}</div>
                </div>

        )
    }
}

const mapStateToProps = (state) => {
  console.log(state, 'state')
    return {
        ...state,
     LoginMessage:state.loginMessage,
     snackBar:state.snackBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData: (data,path) => dispatch(Login(data,path))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);