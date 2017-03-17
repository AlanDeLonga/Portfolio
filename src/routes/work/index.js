import React from 'react';
import Layout from '../../components/Layout';
import Work from './Work';
import workProjs from '../../data/workProjs';

const title = 'Work Experience';

export default {

  path: '/work/:wid',

  action({ params }) {
    const workProj = workProjs[params.wid];
    return {
      title,
      component: <Layout><Work workProj={workProj} title={title} /></Layout>,
    };
  },

};
