import { Component, h } from "preact";
import Login from './Login/Login'
class Home extends Component {
  state = {
    login: false
  }

  componentDidMount() {
    Login()
  }

  render(props, { login }) {
    return (
      <div id="Home">
        {
          login ? (<div>Login </div>) :
            (<div>Trolleando</div>)
        }
      </div>
    )
  }

}
export default Home 