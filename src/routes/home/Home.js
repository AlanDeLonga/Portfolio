import React, { PropTypes } from 'react';
import { Row, Col } from 'pui-react-grids';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    workProjs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.object,
    })).isRequired,
    persProjs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      languages: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.object,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      workTiles: 6,
      projTiles: 4,
    };
  }

  buildCards = (proj, index) => {
    if (proj.content.img) {
      if ((proj.dates && index < this.state.workTiles) ||
          (proj.languages && index < this.state.projTiles)) {
        return (
          <Col key={index} md={6} className={s.projItem}>
            <div className={s.workProjCard}>
              <img src={proj.content.img} alt="poster" width="100%" />
              <div className={s.textBox}>
                <div className={s.topSection}>
                  <h1 className={s.projTitle}><a href={proj.link}>{proj.title}</a></h1>
                  { proj.dates ?
                    <div className={s.projDate}>{proj.dates}</div> :
                    <div className={s.projDate}>{proj.languages}</div>
                  }
                </div>
                <div className={s.projDesc}>{proj.description}</div>
              </div>
            </div>
          </Col>
        );
      }
    }
    return '';
  };

  moreTiles = (type) => {
    if (type === 'work' && this.state.workTiles < this.props.workProjs.length) {
      this.setState({
        workTiles: this.state.workTiles + 2,
      });
    }
    if (type === 'proj' && this.state.projTiles < this.props.persProjs.length) {
      this.setState({
        projTiles: this.state.workTiles + 2,
      });
    }
  };

  showMore = (type) => {
    if (type === 'work' && this.state.workTiles < this.props.workProjs.length) {
      return <div id="moreWork" onClick={() => { this.moreTiles('work'); }} className={s.showMore}>View More</div>;
    }
    if (type === 'proj' && this.state.projTiles < this.props.persProjs.length) {
      return <div id="moreProj" onClick={() => { this.moreTiles('proj'); }} className={s.showMore}>View More</div>;
    }
    return '';
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.banner}>
          <h1>Work Experience</h1>
        </div>
        <Row className={s.container}>
          <ReactCSSTransitionGroup
            transitionName="workExperience"
            transitionAppear
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1300}
          >
            {this.props.workProjs.map(this.buildCards)}
          </ReactCSSTransitionGroup>
        </Row>
        { this.showMore('work')}
        <div className={s.persProj} />
        <div className={s.banner}>
          <h1>Personal Projects</h1>
        </div>
        <Row className={s.container}>
          <ReactCSSTransitionGroup
            transitionName="personalProj"
            transitionAppear
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1300}
          >
            {this.props.persProjs.map(this.buildCards)}
          </ReactCSSTransitionGroup>
        </Row>
        { this.showMore('proj')}
      </div>
    );
  }
}

export default withStyles(s)(Home);
