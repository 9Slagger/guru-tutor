import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signinAuth } from '../../actions'
import MainLayout from '../../components/MainLayout'
import Signin from './Signin'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  signin(email, password) {
    const user = {
      email: email,
      password: password
    }
    this.props.signinAuth(user)
  }

  render() {
    return (
      <MainLayout>
        <section className="section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img
                    alt="Web Studio"
                    className="img-fluid"
                    src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/33045759_176125009894830_6956218333561618432_o.jpg?_nc_cat=110&_nc_eui2=AeG6Ukm9EEkNUzmcYylzsCxxSmXCjBZclEopoypELvwL0VsRIwZb5-5oPgR2bQXzUXTfGfim9xXYRLYjCYZfriKAKkMRh4YgiRjC_C8lP2WtwQ&_nc_ht=scontent.fbkk12-3.fna&oh=56d1d971bbee068f100b218746f80474&oe=5C9BEF5E"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
                <div>
                  <h2>TUTOR NAME</h2>
                  <p className="margin-top-s">
                    ติวเตอร์ มทส ประตู 1 เนื้อหาละเอียดครบถ้วน มีคอร์สออนไลน์
                  </p>
                  <Signin />
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
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
