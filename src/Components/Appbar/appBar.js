import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {MDBBtn} from 'mdbreact'
import FirebaseApp from './../../Config/Firebase/firebase'
import {Logout} from './../../Config/Store/action'
import {connect} from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : 'darkcyan'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           ToDo App
          </Typography>
          <MDBBtn  color="cyan" type="button" >
                 <span onClick={()=>props.Logout(props.path)}>
                 Log out
                  </span> 
            </MDBBtn>
        </Toolbar>
      </AppBar>
    </div>
  );
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
      Logout: (path) => dispatch(Logout(path))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ButtonAppBar);