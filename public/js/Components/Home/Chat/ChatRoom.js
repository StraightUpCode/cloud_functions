import { h, Component } from 'preact'
import Message from './Message';

export default class ChatRoom extends Component {

  render({ chatRoom: { chatName, last_message } }, state) {
    return (
      <div>
        <div>{chatName}</div>
        {!!last_message ? <Message message={last_message}></Message> : null}
      </div>)
  }
}