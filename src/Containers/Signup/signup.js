import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import { Signup } from './../../Config/Store/action'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBAnimation } from 'mdbreact';
import {Link} from 'react-router-dom'
import './Signup.css'
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName:"",
            email: '',
            password: ''

        }
        this.textInput=React.createRef();
        this.textInput1=React.createRef();
        this.textInput2=React.createRef();
    }
 signupFunc=()=>{
    if(this.state.fullName===""){
  this.textInput.current.setFocus()
    }
    else if(this.state.email===""){
        this.textInput1.current.setFocus()
    }
    else if(this.state.password===""){
        this.textInput2.current.setFocus()
    }
    else{
        this.props.sendData(this.state,this.props.history)
    }
 }

    render() {

        return (
            <div>
                <br/><br/><br/>
  <MDBContainer>
    <MDBAnimation type="slideInRight">

      <MDBRow center>
        <MDBCol md="6" lg="5">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                  onChange={(e)=>this.setState({fullName:e.target.value})}
                  ref={this.textInput}
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    />
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
                  <MDBBtn color="cyan" type="button" onClick={()=>this.signupFunc()}>
                    SignUp
                  </MDBBtn>
                </div>
              <div style={{textAlign:"center"}}>Here <Link to="/login">Log In </Link> </div>

              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
                    </MDBAnimation>
    </MDBContainer>
                <div id="snackbar" className={this.props.snackBar}>{this.props.signupErr}</div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        signupErr: state.SignupErr,
        snackBar: state.snackBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData: (data,path) => dispatch(Signup(data,path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

