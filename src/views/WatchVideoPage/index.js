import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import MainLayout from '../../components/MainLayout'
import PlayVideo from '../PlayVideoPage'
import { connect } from 'react-redux'
import { fetchOneLecture } from '../../actions'
// import { isEmpty } from 'lodash'
import Progress from '../../components/Progress'

class WatchVideoPage extends Component {
  componentDidMount() {
    // this.props.fetchOneLecture(this.props.match.params.id)
  }

  render() {
    const { courses } = this.props
    if (courses.isFetching) {
      return <Progress />
    } else {
      return (
        <MainLayout>
          <div className="container mt-5">
            <Link
              className="btn btn-primary mb-2 ml-3"
              to={`/watch/course/${courses.dataone.id}`}
            >
              กลับ
            </Link>
            <PlayVideo link={`/video/${this.props.match.params.id}-1080.mp4`} />
          </div>
        </MainLayout>
      )
    }
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
