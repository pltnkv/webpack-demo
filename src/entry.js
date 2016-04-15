var amdDep = require('./amd-dep')
var commonjsDep = require('./commonjs-dep')
var ts = require('file.ts')
var template = require('../static/template.html')

alert('Welcome:' + amdDep + commonjsDep, ts)