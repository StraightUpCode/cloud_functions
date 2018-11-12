import { h, Component } from 'preact'
import { Router } from 'preact-router'

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
      </Router>
    )
  }

}

export default AppRouter;