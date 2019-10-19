import FirebaseApp from './../Firebase/firebase'

function Signup(data,path) {
    console.log(data)
    return (dispatch) => {

        FirebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                res.user.sendEmailVerification()
                .then(()=>{
                    console.log("email hs sent")
                    console.log(res)
                     console.log(res.user)
                    FirebaseApp.firestore().collection("users").doc(res.user.uid).set(data)
                        .then((res) => {
                            console.log(res)
                            dispatch({
                                type: "signupSucess",
    
                            })
                            path.push("/login")
                        })
                        .catch((err) => {
                            console.log(err)
                            dispatch({ type: "showSignupErr", payload: err.message });
                            setTimeout(() => { dispatch({ type: "hideSignupErr" }) }, 3000)
                        })
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
            .catch((err) => {
                dispatch({ type: "showSignupErr", payload: err.message });
                setTimeout(() => { dispatch({ type: "hideSignupErr" }) }, 3000)
            })
    }

}


function Login(data,path){
    return(dispatch)=>{
        FirebaseApp.auth().signInWithEmailAndPassword(data.email,data.password)
        .then((res)=>{
            console.log(res);
            dispatch({type:"loginSucess",loginMessage:"login Sucessfully"})
            setTimeout(() => { dispatch({ type: "hideloginMessage" }) }, 3000)
            path.push("/home")
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type:"loginFailed",loginMessage:err.message})
            setTimeout(() => { dispatch({ type: "hideloginMessage" }) }, 3000)
        })
    }
}

const Logout = (path) => {

    return dispatch => {
        FirebaseApp.auth().signOut().then(function () {
            dispatch({ type: 'logout' })
            path.push('/')
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }

}

export {
    Signup,
    Login,
    Logout
}