import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './ADLogo.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl} 2x`} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>Alan DeLonga</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Software Engineer/Architect</h1>
            <p className={s.bannerDesc}>Turning concepts and designs into a reality</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
