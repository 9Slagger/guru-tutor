import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signinAuth } from '../../actions'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  signin(email, password) {
    console.log(this.state)
    const user = {
      email: email,
      password: password
    }
    this.props.signinAuth(user)
  }

  render() {
    return (
      <div>
        <section className="section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img
                    alt="Web Studio"
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/solodev/vertically-centering/master/images/vc-img-1.jpg"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
                <div>
                  <h2>TUTOR NAME</h2>
                  <p className="margin-top-s">
                    ติวเตอร์ มทส ประตู 4 เนื้อหาละเอียดครบถ้วน มีคอร์สออนไลน์
                  </p>
                  <form>
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="your email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        this.signin(this.state.email, this.state.password)
                      }
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(
  mapStateToProps,
  { signinAuth }
)(index)
