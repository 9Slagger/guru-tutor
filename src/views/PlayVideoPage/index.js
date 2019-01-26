import React, { Component } from 'react'
import plyr from 'plyr'
// import axios from 'axios'

class PlayVideo extends Component {
  componentDidMount() {
    const options = {
      toggleInvert: true,
      seekTime: 10,
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen'
      ]
    }
    this.player = plyr.setup('#plyr-player', options)
  }
  componentWillUnmount() {
    if (this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.destroy()
      }
    }
  }
  render() {
    // const { link } = this.props
    // let data
    // let token =
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyVHlwZSI6ImFkbWluIiwiZXhwIjoxNTczNDU3MTUyLCJpZCI6IjVjMTg4NmNiNmZkMzMzN2UxNmQzY2NhZiJ9.iE3q9XoKVDDmHvPtmn_HnOpH8IYCgcr2bjlJjRCcH0o'
    // axios
    //   .get(
    //     `http://35.247.150.186/restricted/video/5c49aaf32bd666748b78aaef-1080.mp4`,
    //     {
    //       headers: { Authorization: token }
    //     }
    //   )
    //   .then(res => {
    //     data = res.data
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    return (
      <div className="text-center">
        <div className="container">
          <video
            controls
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
            id="plyr-player"
          >
            <source
              src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
              type="video/mp4"
              size="1080"
            />
          </video>
        </div>
      </div>
    )
  }
}

export default PlayVideo
