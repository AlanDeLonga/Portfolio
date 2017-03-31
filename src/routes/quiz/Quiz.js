import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SigmaForm from '../../components/SigmaForm/SigmaForm';
import s from './Quiz.css';

class Work extends React.Component {
  static propTypes = {
    workProj: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // console.log(this.props.workProj);
    return (
      <div className={s.root}>
        <div className={s.banner}>
          <h1>{this.props.workProj.title}</h1>
          <SigmaForm savedRows={this.state} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Work);
