const http = require('http');

const options = {
  host: 'localhost',
  path: '/hello'
};

// Make a request
const req = http.request(options,() => {
    console.log("port is running");
    
});
req.end();

req.on('information', (info) => {
  console.log(`Got information prior to main response: ${info.statusCode}`);
});