import React, { PropTypes } from 'react';
// import { Row, Col } from 'pui-react-grids';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Work.css';

class Work extends React.Component {
  static propTypes = {
    workProj: PropTypes.shape({
      title: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props.workProj);
    return (
      <div className={s.root}>
        <div className={s.banner}>
          <h1>{this.props.workProj.title}</h1>
          <span>{this.props.workProj.description}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Work);
