import {auth} from '../firebase';

export const SIGN_IN = 'sign_in';


export const SignInUser = (email, password) =>{
    return dispatch =>{
        auth.signInWithEmailandPassword(email, password).then(()=>{

            // navigate to profile screen
        }).catch((e)=>{
            alert(e.code)
            alert(e.message)
        })
    }
}