// import all src
// not need .d.ts .md and .pug
const srcContext = require.context('../../src', true, /^([A-Za-z\-\_0-9])*\.(js|ts)$/);
srcContext.keys().forEach(srcContext);

// require all test files
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
