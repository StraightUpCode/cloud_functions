import { h, Component } from 'preact'

export default class Download extends Component {

  componentDidMount() {
    this.handleClick()
    console.log('Download Mounted')
  }
  handleClick = () => {
    import('./helper.js')
      .then(module => module.default)
      .then(fn => fn())
  }
  render(props, { url }) {
    return (
      <div>
        <a href='#' onClick={this.handleClick}>Si la descarga no ha iniciado en 10 segundos click aqui</a>
      </div>
    )
  }
}