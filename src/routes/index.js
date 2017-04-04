/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./work').default,
    require('./proj').default,
    require('./contact').default,
    require('./about').default,
    require('./quiz').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route ? route.title : 'Untitled Page'} - Alan DeLonga`;
    route.description = route.description || '';

    return route;
  },

};
