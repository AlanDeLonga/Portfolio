import React from 'react';
import Home from './Home';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import workProjs from '../../data/workProjs';
import persProjs from '../../data/persProjs';

export default {

  path: '/',

  async action() {
    // const resp = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: '{news{title,link,content}}',
    //   }),
    //   credentials: 'include',
    // });
    // const { data } = await resp.json();
    // if (!data || !data.news) throw new Error('Failed to load the news feed.');
    return {
      title: 'Portfolio',
      component: <Layout><Home workProjs={workProjs} persProjs={persProjs} /></Layout>,
    };
  },

};
