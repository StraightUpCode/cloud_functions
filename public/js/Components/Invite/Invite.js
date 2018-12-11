import { h, Component } from 'preact'

export default class Invite extends Component {

  componentDidMount() {
    console.log("Invite Montado")
  }
  handleClick = () => {
    import('./helper.js')
      .then(module => module.default)
      .then(fn => fn())
  }
  render(props, { url }) {
    return (
      <div>
        <a href='#' onClick={this.handleClick}>Descarga la App Aqui</a>
      </div>
    )
  }
}