import { h, Component } from 'preact'
import { FireStorage } from '../../firebase'

export default class Invite extends Component {

  componentDidMount() {
    console.log("Invite Montado")
  }
  handleClick = async () => {
    console.log('CALLED ASYNC')
    const url = await FireStorage.ref()
      .child('app-debug.apk')
      .getDownloadURL()
    const blob = await fetch(url)
      .then(response => response.blob())

    const newURL = URL.createObjectURL(new Blob([blob], { type: 'application/application/vnd.android.package-archive' }))
    console.log('URL : ' + newURL)
    const a = document.createElement('a')
    a.setAttribute('href', newURL)
    a.download = 'FirebaseChatApp.apk'
    a.click()
    console.log('FINISHED')

  }
  render(props, { url }) {
    return (
      <div>
        <a href='#' onClick={this.handleClick}>Descarga la App Aqui</a>
      </div>
    )
  }
}