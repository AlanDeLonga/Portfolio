import React, { PropTypes } from 'react';
import { Row, Col } from 'pui-react-grids';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import s from './Home.css';
import workProjimg from './softwareDev.jpeg';

const buildCards = (proj, index) => {
  if (proj.content.img) {
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
  return (
    <Col key={index} md={6} className={s.projItem}>
      <div className={s.workProjCard}>
        <h1 className={s.projTitle}><a href={proj.link}>{proj.title}</a></h1>
        <div className={s.topSection}>
          <h1 className={s.projTitle}><a href={proj.link}>{proj.title}</a></h1>
          <div className={s.projDate}>{proj.dates}</div>
        </div>
        <div className={s.projDesc}>{proj.description}</div>
      </div>
    </Col>
  );
};

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

  // <h1>React.js News</h1>
  // {this.props.news.map(item => (
  //   <article key={item.link} className={s.newsItem}>
  //     <h1 className={s.newsTitle}><a href={item.link}>{item.title}</a></h1>
  //     <div
  //       className={s.newsDesc}
  //       // eslint-disable-next-line react/no-danger
  //       dangerouslySetInnerHTML={{ __html: item.content }}
  //     />
  //   </article>
  // ))}

  // <div className={s.banner}>
  //   <h1>Personal Projects</h1>
  // </div>
  // <Row className={s.container}>
  //   {this.props.persProjs.map(buildCards)}
  // </Row>

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
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.props.workProjs.map(buildCards)}
          </ReactCSSTransitionGroup>
        </Row>
        <div className={s.persProj} />
        <div className={s.banner}>
          <h1>Personal Projects</h1>
        </div>
        <Row className={s.container}>
          <ReactCSSTransitionGroup
            transitionName="personalProj"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.props.persProjs.map(buildCards)}
          </ReactCSSTransitionGroup>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(Home);
