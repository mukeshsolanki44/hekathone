import React from 'react';
import { MDBCard, MDBRow, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import FirebaseApp from './../../Config/Firebase/firebase'


class PanelPage extends React.Component{


    componentDidMount=()=>{
        FirebaseApp.auth().onAuthStateChanged((user)=>{
          if(user){
             if(user.emailVerified===true){
               this.props.history.push("/home");
             }
             else{
              alert("verify your email");
             }
          }
          else{
            this.props.history.push("/login");    
          }
        })
      }
    render(){

        return (
            <MDBContainer>
                <MDBRow center>
  <MDBCard style={{ width: "40rem", marginTop: "10rem" }}>
         <h1>Wellcome!</h1>
    <MDBCardBody>
      
      <MDBCardText>
        {/* With supporting text below as a natural lead-in to additional
        content. */}
      </MDBCardText>
      
    </MDBCardBody>
  </MDBCard>
  </MDBRow>
</MDBContainer>
);
};
}

export default PanelPage;