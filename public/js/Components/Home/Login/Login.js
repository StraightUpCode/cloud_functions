import { h, Component } from 'preact'
import { route } from 'preact-router'
import { firebase, FirebaseAuth } from '../../../firebase'
import 'firebase/auth'
import CustomAuthButton from './CustomAuthButton';
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
  registerUser = (email, password) => {
    FirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .then(_ => route('/'))
      .catch(err =>
        this.setState({ registerError: err.message })
      )
  }
  signIn = (email, password) => {
    FirebaseAuth.signInWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .then(_ => route('/'))
      .catch(err => {
        this.setState({ signInError: err.message })
      })
  }
  render(props, { registerError, signInError }) {
    return (
      <div>
        Logging page
        <CustomAuthButton handleSubmit={this.signIn} type="Log In" errorMsg={signInError} />
        <CustomAuthButton handleSubmit={this.registerUser} type="Register" errorMsg={registerError} />
        <button onClick={this.signInGoogle}>Sign In Google </button>
      </div>)
  }
}

export default Login