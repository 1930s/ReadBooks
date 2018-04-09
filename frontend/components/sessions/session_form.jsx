import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.action(user);
  }

  render() {
    return (
      <div className="signup-login-body">
      <form className="signup-login" onSubmit={this.handleSubmit}>
        <label>Username:
          <br></br>
          <input type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>
        <br></br>
        <label>Password:
          <br></br>
          <input type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>
        <br></br>
        <input type="submit" value={this.props.formType} />
      </form>
    </div>
    )
  }

}

export default withRouter(SessionForm);
