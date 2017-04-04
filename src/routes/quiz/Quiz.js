import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SigmaForm from '../../components/SigmaForm/SigmaForm';
import s from './Quiz.css';

class Quiz extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      merits: ['1 merit', '2 merits', '3 merits'],
    };
  }

  render() {
    // console.log(this.props.workProj);
    return (
      <div className={s.root}>
        <div className={s.banner}>
          <h1>{this.props.title}</h1>
          <SigmaForm merits={this.state.merits} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Quiz);
