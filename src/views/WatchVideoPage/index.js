import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import MainLayout from '../../components/MainLayout'
import PlayVideo from '../PlayVideoPage'
import { connect } from 'react-redux'
import { fetchOneLecture } from '../../actions'
import { isEmpty } from 'lodash'

class WatchVideoPage extends Component {
  componentDidMount() {
    this.props.fetchOneLecture(this.props.match.params.id)
  }

  render() {
    return (
      <MainLayout>
        <div className="container mt-5">
          <Link
            className="btn btn-primary mb-2 ml-3"
            to={`/watch/course/${this.props.courses.dataone.id}`}
          >
            กลับ
          </Link>
          {!isEmpty(this.props.lectures.dataone) && (
            <PlayVideo link={this.props.lectures.dataone.link} />
          )}
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = ({ lectures, courses }) => {
  return { lectures, courses }
}

const mapDispatchToProps = {
  fetchOneLecture
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchVideoPage)
