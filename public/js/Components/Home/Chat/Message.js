import { Firestore } from "../../../firebase";
import { h } from 'preact'

export default ({ message: { datetime, message, nickname, uID } }) => {
  console.log(message)
  return (
    <div>
      <div>{nickname || ''}</div>
      <div>{message}</div>
      <div>{datetime.toString()}</div>
    </div>
  )

}

