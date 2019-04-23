// Example 3:

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // basically: if the url is of the main page as indicated by this backslash, then populate it with content
  if (req.url === "/") {
    // This works

    // double underscore. public folder. index.html filename.
    // callback for `fs` (error, data)
    fs.readFile(
      path.join(__dirname, `public`, `index.html`),
      (err, content) => {
        // check for an error
        if (err) throw err;
        // status code followed by the content type
        res.writeHead(200, { "Content-Type": "text/html" });
        // serve the page
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {
    // This works

    // double underscore. public folder. index.html filename.
    // callback for `fs` (error, data)
    fs.readFile(
      path.join(__dirname, `public`, `about.html`),
      (err, content) => {
        // check for an error
        if (err) throw err;
        // status code followed by the content type
        res.writeHead(200, { "Content-Type": "text/html" });
        // serve the page
        res.end(content);
      }
    );
  }
});

// listen on a port. Instead of tacking it on. Create a variable and method .listen()
// a process environment determines the local host
// if that's not found it's going to run it on 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Sever running on port ${PORT}`));

// Example 2: This works!

// const Logger = require('./logger');

// // logger is a class so it needs to be instantiated as such
// const logger = new Logger();

// // get callback with data
// logger.on('message', (data) => console.log('Called Listener', data));

// logger.log('Hello World');

// Example 1:

// const Person = require('./person.js');

// instatiation
// const person1 = new Person('Mitchell', 30);

// person1.greeting();

// console.log(person.name);
