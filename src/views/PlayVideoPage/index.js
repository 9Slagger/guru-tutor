import React, { Component } from 'react'
import plyr from 'plyr'

class PlayVideo extends Component {
  componentDidMount() {
    const options = {}
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
    // const shortlink = link.split('=')

    return (
      <div className="text-center">
        <div class="container">
          <video
            controls
            settings
            crossorigin
            playsinline
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
            id="plyr-player"
          >
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
              type="video/mp4"
              size="576"
            />
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
              type="video/mp4"
              size="720"
            />
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
              type="video/mp4"
              size="1080"
            />
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4"
              type="video/mp4"
              size="1440"
            />

            <track
              kind="captions"
              label="English"
              srclang="en"
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
              default
            />
            <track
              kind="captions"
              label="Français"
              srclang="fr"
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
            />

            <a
              href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
              download
            >
              Download
            </a>
          </video>
        </div>
      </div>
    )
  }
}

export default PlayVideo
