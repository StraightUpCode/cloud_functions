import { Component, h } from "preact";
import Login from './Login/Login'
import Chat from './Chat/Chat'
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
    console.log(FirebaseAuth.currentUser)

    return (
      <div id="Home">
        {
          FirebaseAuth.currentUser ? <Chat /> : <Login />
        }
      </div>
    )
  }

}
export default Home 