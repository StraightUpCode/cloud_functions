import { h, Component } from 'preact'
import { Firestore } from '../../../firebase'
import ChatRoom from './ChatRoom';

class Chat extends Component {
  state = {
    chatRooms: []
  }
  async componentDidMount() {
    const QuerySnapshot = await Firestore
      .collection('salas_chat')
      .where('tipoChat', '==', 'chat_publico')
      .get()
    QuerySnapshot.forEach(documentSnapshot => {
      this.setState((prevState) => {
        prevState.chatRooms.push(documentSnapshot.data())
        return prevState
      })
    })


  }
  render(props, { chatRooms }) {
    console.log(chatRooms)
    return (
      <div>
        <div> Chat Page </div>
        {chatRooms.map(el => <ChatRoom chatRoom={el} />)}
      </div>
    )
  }
}

export default Chat