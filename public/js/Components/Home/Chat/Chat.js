import { h, Component } from 'preact'
import { Firestore } from '../../../firebase'
import Message from './Message'

class Chat extends Component {
  state = {
    last_msg: {
      uID: '',
      datetime: '',
      message: '',
      nickname: ''
    }
  }
  componentDidMount() {
    console.log(Firestore)
    const msg = Firestore.collection('chat_publico')
      .doc('chat_general')
      .get()
      .then(docSnapshot => docSnapshot.data())
      .then(obj => {
        this.setState({ last_msg: obj.last_message }, () => {
          console.log("Set State")
          console.log(this.state)
        })
      })

  }
  render(props, { last_msg }) {
    return (
      <div>
        <div> Chat </div>
        <Message message={last_msg} />
      </div>
    )
  }
}

export default Chat