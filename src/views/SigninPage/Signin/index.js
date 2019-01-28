import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signinAuth } from '../../../actions'
import SigninFormFields from './components/SigninFormFields'

class index extends Component {
  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  signin = values => {
    this.props.signinAuth(values)
  }

  render() {
    return <SigninFormFields onSubmit={this.signin} />
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(
  mapStateToProps,
  { signinAuth }
)(index)
