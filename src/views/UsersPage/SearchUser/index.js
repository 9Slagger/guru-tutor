import React, { Component } from 'react'

import SearchUserFormFields from './Components/SearchUserFormFields'
import { connect } from 'react-redux'

class index extends Component {
  render() {
    const { Search } = this.props
    return (
      <div className="container-fluid">
        <SearchUserFormFields onSubmit={Search} />
      </div>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)
