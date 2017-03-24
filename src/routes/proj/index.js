import React from 'react';
import Layout from '../../components/Layout';
import Proj from './Proj';
import persProjs from '../../data/persProjs';

const title = 'Personal Projects';

export default {

  path: '/proj/:pid',

  action({ params }) {
    const persProj = persProjs[params.pid];
    return {
      title,
      component: <Layout><Proj persProj={persProj} title={title} /></Layout>,
    };
  },

};
