import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchOneNewContent,
  createNewContent,
  editNewContent
} from '../../../actions'
import NewContentFormFields from './Components/NewContentFormFields'

class addNewContent extends Component {
  saveNewContent = values => {
    this.props.createNewContent(values)
  }

  componentDidMount() {
    if (this.props.match.path.indexOf('edit') > 0)
      this.props.fetchOneNewContent(this.props.match.params.id)
  }

  editNewContent = values => {
    this.props.editNewContent(this.props.match.params.id, values)
  }

  render() {
    const { match } = this.props
    return (
      <div>
        {match.path.indexOf('add') > 0 ? (
          <div className="container-fluid">
            <h2 className="text-center">เพิ่มข่าวสาร</h2>
            <NewContentFormFields onSubmit={this.saveNewContent} />
          </div>
        ) : (
          <div className="container-fluid">
            <h2 className="text-center">แก้ไขข่าวสาร</h2>
            <NewContentFormFields onSubmit={this.editNewContent} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {
  fetchOneNewContent,
  createNewContent,
  editNewContent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addNewContent)
