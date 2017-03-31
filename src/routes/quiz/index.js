import React from 'react';
import Quiz from './Quiz';

const title = 'Sigma Quiz';

export default {

  path: '/quiz',

  action() {
    return {
      title,
      component: <Quiz title={title} />,
    };
  },

};
