import { h, Component } from 'preact'
import Portal from 'preact-portal'
import { FirebaseAuth } from '../../../firebase';
import { route } from 'preact-router'

class RegisterButton extends Component {
  state = {
    email: '',
    password: '',
    open: false
  }
  togglePortal = e => {
    this.setState((prevState) => ({ open: !prevState.open }))
  }
  register = e => {
    e.preventDefault()
    let { email, password } = this.state
    FirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .then(_ => route('/'))
      .catch(err =>
        this.setState({ error: err.message })
      )

  }
  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({ [name]: value })
  }

  render(props, { open, error }) {
    return (
      <div >
        <button onClick={this.togglePortal} >Register</button>
        {open ?
          <Portal into="body">
            <form onSubmit={this.register}
            >
              <label>
                E-Mail :
                <input name="email" type="text" placeholder="example@email.com" onChange={this.handleChange} />
              </label>
              <label>
                Password
                <input name="password" type="password" placeholder="******" onChange={this.handleChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </Portal>
          : null}
        {error ? <span>Error {error}</span> : null}
      </div >

    )
  }
}

export default RegisterButton 