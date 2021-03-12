import React, { Component } from "react";
import "./signin.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    // const { email, password } = this.state;
    // axios
    // .post(
    //   "http://localhost:3001/sessions",
    //   {
    //     user: {
    //       email: email, 
    //       password: password,
    //     }
    //   },
    // )
    //   .then(response => {
    //     console.log('response from login', response);
    //     // if (response.data.status === "created") {
    //     //   this.props.handleSuccessAuth(response)
    //     // }
    //   })
    //   .catch(error => {
    //     console.log('login error', error);
    //   });
    //   event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}


// function Signin() {
//     return (
         
//         <div className="login">
//            <div className="login">
//         </div>
//         <div className="content">
//         </div>
//       </div>
//     );
// }
//   export default Signin