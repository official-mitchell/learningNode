// Pre-Express

// Example 3. Proven to work on localhost:5000

const http = require('http');

// create server object. Notice how this http.createServer has been separated over two lines
http
.createServer((req, res) => {
    // write response
    res.write('Hello World');
    res.end();
})
// notice how this .listen component was sent to the next line
.listen(5000, () => console.log('Server running..'));

