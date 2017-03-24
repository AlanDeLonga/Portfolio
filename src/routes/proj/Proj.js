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

    };
  }

  render() {
    // console.log(this.props.persProj);
    return (
      <div className={s.root}>
        <div className={s.banner}>
          <h1>{this.props.persProj.title}</h1>
          <span>{this.props.persProj.description}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Proj);
