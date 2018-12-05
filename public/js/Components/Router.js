import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Invite from './Invite/Invite'
import Home from './Home/Home'


class AppRouter extends Component {
  state = {
    msg: "Hello"
  }
  componentDidMount() {
    console.log("App Mounted")
  }
  render(props, { msg }) {
    return (
      <Router>
        <Home path="/" />
        <Invite path="/invite" />
      </Router>
    )
  }

}

export default AppRouter;