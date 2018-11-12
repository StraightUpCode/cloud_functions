import { Component, h } from "preact";
import Login from './Login/Login'
import { FirebaseAuth } from "../../firebase";

class Home extends Component {
  state = {
    login: false
  }

  componentDidMount() {
    console.log("Home Mounted")
  }

  render(props, { login }) {
    let component


    return (
      <div id="Home">
        {
          FirebaseAuth.currentUser ? <div> Logged </div> : <Login />
        }
      </div>
    )
  }

}
export default Home 