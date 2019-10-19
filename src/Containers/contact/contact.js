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



class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
        this.textInput1 = React.createRef()
        this.textInput2 = React.createRef()
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
                <p className="h4 text-center py-4">CONTACT US</p>
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
                    label="Your Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    />
                </div>
              <textarea style={{width:'100%'}} placeholder="Your message"></textarea>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="button">
                       Submint form
                  </MDBBtn>

                </div>
              {/* <div style={{textAlign:"center"}}>Here <Link to="/signup">Sign Up </Link> </div> */}
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


export default Contact;