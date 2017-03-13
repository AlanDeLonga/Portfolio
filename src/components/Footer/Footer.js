import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Alan DeLonga 2017</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/about">About</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
