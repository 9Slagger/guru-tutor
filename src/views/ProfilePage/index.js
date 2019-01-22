import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { connect } from 'react-redux'
import EditProfile from './EditProfile'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = { currentEdit: false }
  }
  edit = () => {
    this.setState({ currentEdit: !this.state.currentEdit })
  }
  formatDate(date) {
    var d = new Date(date)
    var month = '' + (d.getMonth() + 1)
    var day = '' + d.getDate()
    var year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('-')
  }
  render() {
    const { auth } = this.props
    console.log(auth.data)
    return (
      <MainLayout>
        <div className="m-5 p-5">
          <div className="row">
            <div className="col-5 mx-auto">
              <div className="crop2">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
                  alt="..."
                  className=""
                />
              </div>
            </div>
            <div className="col">
              {this.state.currentEdit ? (
                <div>
                  <EditProfile edit={this.edit} />
                </div>
              ) : (
                <React.Fragment>
                  <h1>
                    {' '}
                    {auth.data.length > 0 &&
                      auth.data[0].FirstName +
                        ' ' +
                        auth.data[0].LastName +
                        ' '}
                    <small>
                      {auth.data.length > 0 && ' @' + auth.data[0].UserType}
                    </small>
                  </h1>
                  <h3> {auth.data.length > 0 && auth.data[0].Email}</h3>
                  <br />
                  <h4>
                    {' '}
                    {auth.data.length > 0 &&
                      auth.data[0].NickName +
                        ' ' +
                        auth.data[0].TelephoneNumber}
                  </h4>
                  <h4>
                    {' '}
                    {auth.data.length > 0 &&
                      'วันเกิด : ' + this.formatDate(auth.data[0].Birthday)}
                  </h4>
                  <h4> {auth.data.length > 0 && auth.data[0].Address}</h4>
                  <br />
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={this.edit}
                  >
                    แก้ไขข้อมูลส่วนตัว
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(ProfilePage)
