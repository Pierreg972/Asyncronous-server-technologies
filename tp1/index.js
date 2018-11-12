// Import a module
const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle);
// Start the server
server.listen(8080)
// curl localhost:8080 or go to http://localhost:8080