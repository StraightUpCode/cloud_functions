import { h, Component } from 'preact'
import Portal from 'preact-portal'

class CustomAuthButton extends Component {
  state = {
    email: '',
    password: '',
    open: false
  }
  togglePortal = e => {
    this.setState((prevState) => ({ open: !prevState.open }))
  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({ [name]: value })
  }
  handleSubmit = e => {
    e.preventDefault()
    let { email, password } = this.state
    this.props.handleSubmit(email, password)
  }

  render({ errorMsg, type }, { open }) {
    return (
      <div >
        <button onClick={this.togglePortal} >{type}</button>
        {open ?
          <Portal into="body">
            <form onSubmit={this.handleSubmit}
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
        {errorMsg ? <span>Error {errorMsg}</span> : null}
      </div >

    )
  }
}

export default CustomAuthButton 