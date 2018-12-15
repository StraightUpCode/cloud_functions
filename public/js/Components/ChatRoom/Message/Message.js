import { Firestore } from "../../../firebase";
import { h } from 'preact'

export default ({ message: { nickname, message, datetime } }) => {

  return (
    <div>
      <div>{nickname}</div>
      <div>{message}</div>
      <div>{datetime.toString()}</div>
    </div>
  )

}

