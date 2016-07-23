'use strict';

const o = require('../utils/actions.js'); 

module.exports = api => {
  let state = {
    api: api || process.env.GOFORA_OW_API
  };

  return Object.assign(
    {},
    o.getter('api', 'getAPIkey', state),
    o.setter('api', 'setAPIkey', state)
  );
};