import React, { PropTypes } from 'react';
// import { Row, Col } from 'pui-react-grids';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Proj.css';

class Proj extends React.Component {
  static propTypes = {
    persProj: PropTypes.shape({
      title: PropTypes.string.isRequired,
      languages: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showVideoBox: s.videoBox,
      loadedListeners: false,
    };
    this.toggleVideoBox = this.toggleVideoBox.bind(this);
  }

  componentDidUpdate() {
    const video = document.getElementsByTagName('video')[0];
    console.log(video);
    if (!this.state.loadedListeners) {
      video.addEventListener('play', this.toggleVideoBox);
      video.addEventListener('pause', this.toggleVideoBox);
      this.state.loadedListeners = true;
    }
  }

  toggleVideoBox = () => {
    this.setState({
      showVideoBox: (this.state.showVideoBox === s.videoBox) ? s.videoBoxFull : s.videoBox,
    });
    return false;
  };

  displayBanner = (content) => {
    if (content.video) {
      return (
        <div className={this.state.showVideoBox} >
          <video controls>
            <source src={content.video.src} type={content.video.type} />
          </video>
        </div>
      );
    }

    return (
      <img src={content.img} alt="poster" width="100%" />
    );
  };

  render() {
    return (
      <div id="projDisplay" className={s.root}>
        <div className={s.banner}>
          <h1>{this.props.persProj.title}</h1>
          <span>{this.props.persProj.description}</span>
          {this.displayBanner(this.props.persProj.content)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Proj);
