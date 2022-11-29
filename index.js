'use strict';

const startProject = require('./lib/project');
const startXprofiler = require('./lib/xprofiler');
const startXtransit = require('./lib/xtransit');

// run xprofiler
startXprofiler();

// run project
startProject(() => {
  // run xtransit
  startXtransit();
  console.log('========= all project started =========');
});

