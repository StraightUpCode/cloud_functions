import { h, Component } from 'preact'
import { Firestore } from '../../../firebase'

class Chat extends Component {
  state = {

  }
  componentDidMount() {
    console.log(Firestore)
    const msg = Firestore.collection('chat_publico')
      .doc('chat_general')
      .get()
      .then(doc => {
        let msg = doc.data().last_message
        let username = Firestore.collection('users').doc(msg.uID)
          .get()
          .then(user => {
            return user.data()
          })
        return Promise.all([msg, username])
          .then((msg, username) => {
            return ({ ...msg, ...username })
          })
      })
      .then(obj => {
        console.log("Obj")
        console.log(obj)
        this.setState({ last_msg: obj }, () => {
          console.log("Set State")
          console.log(this.state)
        })
      })

  }
  render(props, { last_message }) {
    return (
      <div>
        <div> Chat </div>
        <div>{last_message}</div>
      </div>
    )
  }
}

export default Chat