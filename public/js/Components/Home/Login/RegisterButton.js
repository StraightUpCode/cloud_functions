import { h, Component } from 'preact'
import Portal from 'preact-portal'

class RegisterButton extends Component {
  state = {
    email: '',
    password: '',
    nickname: '',
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
    let { email, password, nickname } = this.state
    this.props.handleSubmit(email, password, nickname);
  }

  render({ errorMsg, type }, { open }) {
    return (
      <div >
        <button onClick={this.togglePortal} >{type}</button>
        {open ?
          <Portal into="body">
            <div class="portal">
              <div class="portal-content">
                <div onClick={this.togglePortal}>Close</div>
                <form onSubmit={this.handleSubmit}
                >
                  <input name="email" type="text" placeholder="example@email.com" onChange={this.handleChange} />

                  <input name="password" type="password" placeholder="******" onChange={this.handleChange} />
                  <input name="nickname" type="text" placeholder="Nickname" onChange={this.handleChange} />
                  <button class="button" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </Portal>
          : null}
        {errorMsg ? <span>Error {errorMsg}</span> : null}
      </div >

    )
  }
}

export default RegisterButton 