import { h, Component } from 'preact'
import { route } from 'preact-router'
import { firebase, FirebaseAuth, Firestore } from '../../../firebase'
import 'firebase/auth'
import CustomAuthButton from './CustomAuthButton'
import RegisterButton from './RegisterButton'
import './Login.scss'

class Login extends Component {

  state = {
    provider: new firebase.auth.GoogleAuthProvider()
  }

  handleLogin = (e) => { }

  signInGoogle = e => {
    FirebaseAuth.signInWithPopup(this.state.provider)
      .then(result => {
        route('/')
      })

  }
  registerUser = (email, password, nickname) => {
    FirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        return result.user.uid
      })
      .then(userId => {
        console.log(userId)
        Firestore.collection("users")
          .doc(userId)
          .set({ nickname })
      })
      .then(_ => route('/'))
      .catch(err =>
        this.setState({ registerError: err.message })
      )
  }
  signIn = (email, password) => {
    FirebaseAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        return result.user.uid
      })
      .then(userId => {
        console.log(userId)
      })
      .then(_ => route('/'))
      .catch(err => {
        this.setState({ signInError: err.message })
      })
  }
  render(props, { registerError, signInError }) {
    return (

      <div>
        Log in page
        <CustomAuthButton handleSubmit={this.signIn} type="Log In" errorMsg={signInError} />
        <RegisterButton handleSubmit={this.registerUser} type="Register" errorMsg={registerError} />
        <button onClick={this.signInGoogle}>Sign In Google </button>
      </div>)
  }
}

export default Login