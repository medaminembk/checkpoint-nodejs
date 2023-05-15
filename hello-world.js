console.log("HELLO WORLD");

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Set the response status code to 200 OK
  res.statusCode = 200;

  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Write the response body
  res.write('<h1>Hello Node!!!!</h1>\n');

  // End the response
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});




fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('File created!');
});


fs.readFile('hello.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
  });
  
