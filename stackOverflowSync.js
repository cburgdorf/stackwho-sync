var config = require('./config.js');
var StackExchangeSync = require('ninya-sync-stackexchange');

var sync = new StackExchangeSync({
    index: 'production_v4',
    elasticsearchEndpoint: config.elasticsearchEndpoint,
    stackexchangeSite: 'stackoverflow',
    maxEntityCount: 155000,
    pageSize: 10,
    maxRunTime: 9 * 60 * 1000
});

sync.safeResume();
