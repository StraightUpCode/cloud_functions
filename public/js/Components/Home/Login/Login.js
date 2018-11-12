import { h, Component } from 'preact'
import { route } from 'preact-router'
//import firebase from 'firebase/app'
import { firebase, FirebaseAuth } from '../../../firebase'
import 'firebase/auth'
import RegisterButton from './Register';
class Login extends Component {

  state = {
    provider: new firebase.auth.GoogleAuthProvider()
  }

  handleLogin = (e) => { }

  signInGoogle = e => {
    FirebaseAuth.signInWithPopup(this.state.provider)
      .then(result => {
        console.log(result)
        route('/', true)

      })
  }

  render(props, state) {
    return (
      <div>
        Logging page
        <RegisterButton />
        <button onClick={this.signInGoogle}>Sign In Google </button>
      </div>)
  }
}

export default Login