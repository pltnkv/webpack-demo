var amdDep = require('./amd-dep')
var commonjsDep = require('./commonjs-dep')
var ts = require('file.ts')
var template = require('../static/template.html')

// Пример использования webpack.ProvidePlugin
// globalVar содержит строку 'string from ts' из file.ts
alert(globalVar)

alert('Welcome:' + amdDep + commonjsDep, ts)