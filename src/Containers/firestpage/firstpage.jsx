import React from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '../../Components/TextField/textfield'
import Button from '@material-ui/core/Button';

import {Login} from './../../Config/Store/action'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBAnimation } from 'mdbreact';
import { FaFacebookF } from 'react-icons/fa';


class FirstPage extends React.Component{
   
    render(){
        return(
        
                      
  <MDBContainer style={{marginTop:'10%'}}>
    <MDBAnimation type="zoomIn">

      <MDBRow center>
        <MDBCol md="6" lg="5">
          <MDBCard>
            <MDBCardBody>
             
                <div className="text-center py-4 mt-3" >
                <Link to="/login"> <MDBBtn color="cyan" type="button" style={{width:"80%"}} >
                    Login
                  </MDBBtn>
                  </Link> 
          <br/>
                <Link to="/login"> <MDBBtn color="cyan" type="button" style={{width:"80%"}}>
                   <FaFacebookF  style={{width:"10%" ,height:"50%"}} /> Login WIth Facebook
                  </MDBBtn>
                  </Link> 
                </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
</MDBAnimation>
    </MDBContainer>
    
        )
    }
}


export default FirstPage;