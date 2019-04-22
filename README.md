# Node Basic

Approach:
- Work through Node.js on Rithm
- watch supporting material on youtube and lynda
- push through on learning apps

Local Aliases:
- git config --local alias.a add -A
- git a - `git add -A`
- git commit -m - `git ci`
- git push - `push -u`


# Key Concept Reviews 

***Destructuring Notes***

[FreeCodeCamp](https://www.youtube.com/watch?v=-vR3a11Wzt0&t=43s): 6:30

Extract data from arrays or objects into distinct variables. 

1. Assign variables from objects
```
var voxel = {x: 3.6. y: 7.4, z: 6.54};
var x = voxel.x; // x = 3.6

const {x, y, z} = voxel;
- this is a quicker and easier way to assign values from an object

const {x : a, y: b, z: c} = voxel;

```
"get the value of x from voxel and copy it to a, we're gonna get the value of y from voxel and assign it to b"

2. Assign variables from nested objects
```
const nest = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }, 
};
const { start : { x: startX, y: startY }} = nest;
```
"const is an object, start and end are two nested objects. The variable start is assigned to `nest.start` which is also an object. Then we're gonna take the `x` value and assign it to `startX`, and we're gonna take the `y` value and assign it to `startY`"

3. Assign Variables from Arrays
```
const [q, r] = [1, 2, 3, 4, 5];
console.log(q, r ); // 1, 2
console.log(q,,, r); // 1, 4

```

4. Rest Operator to Reassign Array Elements
"the rest variable in the array takes the rest of the values, only works correctly last in the list"
```
const [q, r ...rest] = [1, 2, 3, 4, 5];
console.log(q, r);
console.log(rest); // [3,4,5]
```

5. Pass on object as a function's parameters
```
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
```
becomes
```
const profileUpdate = ({ name, age, nationality, location }) => {

}
```
"pass in profile data object. In the parameter, you destructure the boject into the parameters, you have all these variable names, they are all contained as properties within objects, and you can destructure into variable names. You can choose which properties you seek to turn into properties"


***Scope Review*** 

[Source](https://medium.com/@MentallyFriendly/es6-an-idiots-guide-to-let-and-const-70be9691c389)

- I had the mental question, what happens when I declare a let? Is it a variable or a constant? It's a "block-level scoped variable."

```
var one = 1; //Declared at global level
function doSomething(){
  var two = 2; //Declared at function level
  if( true ){
    var three = 3; //Declared at block level
  }
}
if( true ){
  var four = 4; //Also declared at block level
}
```
- 1. `var` - global or function scope, but  not block level scope
- 2. `let` - has block level scope, limiting its scope to the satement or expression
- 3. `const` - block level scope, variables cannot be redeclared or re-assigned

```
var one = 1;
let two = 2;
if( one === 1 ){
  var one = 10;
  let two = 20;
  console.log(one);
  console.log(two);
}
console.log(one);
console.log(two);
------ Console Output ------
10
20
10
2
```

- TypeError if trying to reassign object attributes/"keys" by adding a new key will not work, while reassigning by updating the value will.


***Debouncing***
- [Video 1](https://www.youtube.com/watch?v=QvJx9nXWmKc)
    - events get triggered for every user interaction. Like say that you want to fire an event after a small timeout
    ```
    function emulateUserEvent(){
        var interval = setInterval(logger, 100);
        setTimeout(function(){
            clearInterval(interval);
        }, 2000);
    }
    ```
    "this runs 20 times"
    - Debouncing takes in a function call back and a wait time and returns another function, a closure.
    - Debouncing is supposed to wait for a certain time after a user has stopped interacting when it calls the event handler function.
- [Medium](https://medium.com/@akwebengineer/there-are-times-when-we-need-do-expensive-things-on-the-browser-such-as-handling-scroll-events-key-1a2a46404f5e)
    - AJAX requests may come back in random order irrelevant to what the user has typed due to its asynchronous nature. Debouncing is a middleman between event triggers and their corresponding event hanlers. A helper function takes in the intended event handler and returns a closure function useful for the event handler
    - Throttling is useful for parallax scrolling where the page will update a certain time intervals


***Prototypes and Constructor Functions***

- [JS Prototypes Video 1 - Coding Train](https://www.youtube.com/watch?v=hS_WqkyUah8)

- Check out risingstack_2 / sketch.js. 1 particle on a canvas that is created would have both a `Particle.x` and a `Particle.y` property but also have a `Particle.prototype` property that gets directed through `show()` function. 
- This can subsequently be chained. The `proto` attribute goes to `Object.prototype` (`hasOwnProperty`). 

- subsqeuently topics of ***"polymorphism"*** and ***"inheritance"***

- [JS Prototypes Video 2 - Techsith](https://www.youtube.com/watch?v=7oNWNlMrkpc)

- While Java has class based inheritance, JavaScript has no class inheritance, it has *prototype inheritance.*
- Using constructors, you can create objects. Every function expression 
- Prototype cuts down on redundancy otherwise, every single new recreation (new "particle") would require recreation of the original function, which gets redundant.
- do 
    - `var x = function(j) { this.i = 0; this.j = j; };` assigning X and J values after input to X
    - `x.prototype.getJ = function() { return this.j; };` creating a new prototype from X to return J values
    - At the top, There is a "Master Object" which has its prototype properties & prototype methods.
    - Beneath, there is a function with has its prototype properties & prototype methods.
    - At the bottom there is the X object  with its prototype properties & prototype methods.
    
- other things include creating subclasses and sub Constructors, overriding prototype chain attributes, and adding prototypes to the master object

    - 1. use a function to reate an object with associated properties (especially with the `this` keyword, example: `this.x = 100; this.y = 99;` )
    - 2. `var p = new Particle();` could call that again. `new` keyword means eectue that function as a constructor function and bind it to the keyword `this`.
    - 3. it has a `proto` property too. 


# Rithm Lesson 1 - Common.js Modules
https://www.rithmschool.com/courses/node-express-fundamentals/introduction-to-node-js

**terminal p1**

- `nvm current` displays the current version of Node in use
- `nvm ls` see all the installed versions of Node on your machine
- `nvm use` 9.0.0 tell nvm to use a specific version of Node
- `nvm alias` default 9.0.0 set the default version of Node

- typing `node` enters the REPL command line interface CLI for JS, terminal becomes a Node environment
- `.exit` escapes

- create a file called `first.js` and add `console.log("Hello World!");`
    - 1. `node first.js` 
    - undefined is the default for functions that don't return anything
- create an add two numbers from terminal ends up looking like:
    - ```
    > function addTwoLog(a, b) {
    ... console.log(a, b);
    ... return a + b;
    ... }
        ```
    - now it returns undefined, but subsequent parameters added complete it
    > addTwoLog(5, 10)
    5 10
    15
    - note: // this is "10 mod 3" 10 % 3
- use node terminal to get help with "this". It'll print out a ton (the global object)

**Common.js Modules** 
- Node.js comes with built in support for Common.js modules making use of `require`, `module`, and `exports` keyword. Common.js makes every JS file a module. Modules act as the way of loading JS from one file to another
- Common.js might be pre ES6 syntax... a little worried
    - 1. My plan of attack is to use the rithm school for concepts, but use othe resources for syntax. 
    

*Common.js Module Exports* 
- see lesson_1
- create two files `main.js` and `helpers.js`
- when you create two files and move them in visual code with imports, VScode will ask if you want your import statements to change
- ok when I moved those files into lesson_1, and ran `node main.js` I got an error 
- oh god damnit. Ok let me explain the errors:
    - 1. I created a lesson 1 folder, here I tried moving the files into respective lesson folders. Didn't work.
    - 2. I created folders in the main lesson_1 folder with the name `lesson_1_helpers` and `lesson_1_main`. Didn't work..
    - 3. I then went back to main and helper js. And it did work, even with the Common.js syntax.
    - 4. I then updated the names and it seemed to work. You should always click to update the import/export paths
- remember for doing this `require` keyword should be followed by module name. No `.js` is needed because it is assumed to be a `.js` file by default
- use relative paths here with the `./`. Node always assumes you're referencing a built-in module or package.
- created a `lesson_1_moreHelpers.js`
    - Attach values to export objects. 
    - Require the module back in `main.js`
- `lesson_1_evenMoreHelpers.js`
    - here's a good comparison of Common -> ES6
    ```
    module.exports = function() {
        console.log("I am the entire module!");
    };
    ```
    Becomes 
    ```
    export default function() {
        console.log("I am the entire module!");
    };
    ```
- Override the module.exports to point to a function instead of an object, so requiring this module means it gets imported as a function
- OK, let me speak some truth. This is bullshit. VScode is giving me errors, but when I switch to that syntax, everything fucks up... although I believe it.

*index.js files*
- index.js files are useful for referencing to parent folder instead of the file itself
- when you have it, you don't even have to reference it in the require statement: [8:58](https://www.youtube.com/watch?time_continue=5&v=-NJ8d81qcNU), because it's default. So you can reference a folder instead with it's index.js assumed
```
var models = require("./models/index"); // /index is not necessary in a folder
var models = require("./models");
```  
- "When building larger apps, you can leverage this advantage by having your index.js files require everything in their folder and then export a big object to the main file"
    - create a `models` folder with an `index.js` file that exports the helper js files for imports everywhere else.
    - do that with
    ```
    exports.first = require("./first");
    exports.second = require("./second");
    exports.third = require("./third");
    ```
    - back in the main.js import things with `const { first, second, third } = require("./models");`

- OK. Wait. So Node.js doesn't yet support ES6 module syntax like `export`, `import`, `default` and such... I think... https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c
    - " the key difference between CommonJS and ES6 modules comes down to when the shape of the module is known and can be used by code."
    - "all import and export statements are resolved to their targets before any code is actually evaluated, and this 'resolution step' occurs asynchronously. Which means lodading the contents of the script, resoltuion of the module imports and exports, and evaluation of the module code would occur over multiple turns of the event loop"
    

- You want to separate executable code in server files from declarations and definitions in other files.

- so **destructuring** occurred in some of the files we just did:
    - `const hello = require('./hello').hello; hello()`
    - becomes `const { hello } = require('.hello'); hello();`
    - nifty syntax

- `exports` is short for `module.exports` object 
    ''' exports.hello = function('.hello') {
            console.log('hello');
        }
    '''
- also. Wrapping your functions into the export, like one export function, becomes more relevant at the time of mongoose, you can set the default for exporting schemas...
    '''
    function multiplyLog(first, second) {
        console.log(first * second);
    }
    module.exports = multiplyLog;
    '''

- Remember:
    - 1. relative paths
    - 2. setting the exports to an object, or using exports syntax
    - 3. don't have to put the index.js
    - 4. JSON files can be imported and come in as a javascript object through the require
  

# Rithm Lesson 2 - Core Node.js Modules

- Be able to compare node finds built-in modules vs custom modules
- Be able to import and use core modules like `fs`, `path`, and `process`

***Core modules***
Node comes with core modules. See this [list](https://nodejs.org/dist/latest-v8.x/docs/api/).

*file system*
`fs module used to read files, write to files, append files, useful for .txt, .csv. 
Review of terminal basics:
    - 1. mkdir lesson_2 && cd lesson_2
    - 2. touch data.txt && touch read.js

- the whole node environment is asnychronous supportive. 
    - 1. [why is node.js asynchronous](https://stackoverflow.com/questions/17607280/why-is-node-js-asynchronous)
        - Languages like PHP and Python are scripting languages, while Javascript isn't, because it doesn't need to compile // FALSE:  It's "evaluated" at runtime, just like PHP & Ruby. Therefore it is a scripting language just like PHP/Ruby.
        - Node.js runs on a single thread while scripting languages use multiple threads. 
            - /// FALSE: Node.js uses several threads, but only one execution threads, and the background threads are for dealing with IO to make all of the asynchronous stuff work again. 
            - // Furthermore: Node.js uses an event loop (single thread) that has a goal of taking network requests and handling them qickly and if it encounters an operating that takes a wile (API request / database query or things involving input/output AKA I.O.) it passes to a background 'worker' thread. PHP and Ruby's threading model does not scale tremendouslywell. 
        - "asynchronous" means satateless and that connection is peristent while synchronous is the opposite. /// YES and NO: state can be preserved in an asynchronous system. in JS you can use bind() to bind a `this` to a function
        ```
        function State() {
            // make sure that whenever doStuff is called it maintains its state
            this.doStuff = this.doStuff.bind(this);
        }
        State.prototype.doStuff = function () {
        };
        ```
        - can javascript be made synchronous? // All languages are synchronous, technically, but JS works better in an asynchronous design because it was designed to be single threaded. There are two types of programs: CPU bound (where the only way to make it go faster is to get more CPU time) and IO bound (spends a lot of time waiting for data, so faster processors won't matter). Video games - CPU bound, web servers and GUIs are IO bound. JS is relatively slow because of its complexity, so it doesn't compete in CPU bound scenarios.
        - JS lends itself to coding in terms of simple functions that can be strung together.
    - 2. [Understanding Async Programming Node](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)
        - Example of reading file asynchronously
        ```
        const fs = require('fs')
        let content
        try {
            content = fs.readFileSync('file.md', 'utf-8')
        } catch (ex) {
            console.log(ex)
        }
        console.log(content)
        ```
        - "I feel like the fs is anytype of markdown document. A content block level scope variable is declared. A try and catch statement tries to read a markdown file with the utf-8 key signatures, and a catch is intend for an (ex) is that an error? Then the content is console.logged."
        - the above could be rewritten as
        ```
        const fs = require('fs')

        console.log('start reading a file...')

        fs.readFile('file.md', 'utf-8', function (err, content) {
            if (err) {
                console.log('error happened during reading the file')
                return console.log(err)
            }

            console.log(content)
        })

        console.log('end of the file')
        ```
        - "error-first callbacks are at the heart of Node.js. Notice two things:
            1. **error-handling:** instead of a try-catch block you have to check for errors in the callback
            2. **no return value:** async functions don't return values, but values will be passed to the callbacks"
        - "the `fs.readfile` function takes three parameters (file, lang, function(err, content)) and then has one condition to return an error, but if not, it console logs everything.
        
        - Remember "higher-order functions"
        ```
        const numbers = [2,4,1,5,4]
        function isBiggerThanTwo (num) {
            return num > 2
        }
        numbers.filter(isBiggerThanTwo)
        ```
        "an array constant is declared, a function that takes in a number will return if its value is greater than two. The filter built-in filter function (kinda like an iterator) is applied to the the constant array with the extra specificity that the number should be bigger than two.
        - The event loop and event driven programming "is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads."
        - Async control flow. 
    - 3. [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?)v=8aGhZQkoFbQ
        - "single-threaded, non-blocking, asycnhronous concurrent language" - JS
        - "Call-stack", "event loop", "callback queue", "heap"
        - V8 is the run time inside chrome. It's a "heap where memory allocation happens, there's acallstack where stack frames are. setTimeout is not in the V8 source".
        - understand the V8 runtime and WebAPIs like DOM (document), ajax (XMLHttpRequest), and setTimeout. This leads to the callback queue which takes events experienced by the user like (onClick, onLoad, onDone) and then populates the vent loop.
        - "the call stack" means one thread and one thing at a time. JS is a single threaded runtime. The stack is where everything is returned. Things get popped off the stack after they are completed. Subsqeuent functions within can be added to the call stack as functions are being run.
        - Recursive problems are called "RangeErrors" when the maximum call stack size has been reached
        - "blocking"
        - setTimeout queues the timeout for the future. 
        - the event loop takes the task queue after a timer gets completed in a web api and when the call stack is clear the event loop pushes that task from the task queue to the call stack to be executed in the runtime.
        - the fuck is a "shim"?
        - refer to [Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) for all you're browser concurrency event loop needs.
        - scroll events trigger every single millisecond - queues up a ton of callbacks, the you're not blocking the stack, but you're filling the queue with a lot. You need to "debounce" those events.
        
    - 4. Async.js (used to avoid callback-hell) allows code to be rewritten with promises'
    
***the path module***
- works well for file paths, extending file paths, and determining paths.
- you can
    1. normalize a path
    2. join multiple paths together
    3. find an absolute path
    4. find the extension of a filename
    
    ```
    const path = require("path");

        // Normalize a path
        console.log(path.normalize("/test/test1//2slashes/1slash/tab/..")); // /test/test1/2slashes/1slash

        // Join multiple paths together
        console.log(path.join("/first", "second", "something", "then", "..")); // /first/second/something

        // Resolve a path (find the absolute path)
        console.log(path.resolve("first.js"));

        // Find the extention of a filename
        console.log(path.extname("main.js")); // .js
    ```
    
***the process module***
- accepts command line arguments (`argv`), listening for specific events (`on`)
- `process.env` accesses environment variables.
- `process` is a reserved keyword.

***HTTP Module***
- use this module on its own to create server. It is one of the essential parts of express.js. Express' role as a framework is to abstract challenging and tedious parts of routing

```
const http = require("http");
// notice below, the first parameter to createServer is a callback function!
const server = http.createServer(function(req, res, next) {
  // sending some header info in my response
  res.writeHead(200, { "Content-type": "text/html" });
  // send some data to the client
  res.write("<h1>Hello World!</h1>");
  // end the response
  return res.end();
});
// notice below, another callback function!
server.listen(3000, function() {
  console.log("Go to localhost:3000");
});
```


# Rithm Lesson 3 - NPM

- explain how package.json works
- be able to install packages
- explain node_modules added to a `.gitignore`

***initializing***

*See Lesson 3 folder*

- use npm
- `npm init` - creation process
- create a `package.json` do `npm init --y`. Prompts serve as a purpose if you want to make your own package and to generate a package.json for dependency and script listing.
- `npm install express`. The --save flag occurs by default
- install "external module" called `request` useful for making server side request to other APIs.

- 1. Create a directory for your `external_modules`
- 2. `npm init --y` from there : creates a package.json
- 3. `npm install request` : creates the node_modules folder
- 4. Create a `main.js`
- 5. add to `main.js` the following: 

```
const request = require("request");

request("http://swapi.co/api/people/1", function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)); // Show the JSON for the Star Wars Character
  }
});

```

- a `.gitignore` is used for telling Github which dependencies to avoid when to commit. to do this you: 
    - 1. add text `node_modules` to the `.gitignore`
    - 2. terminal version: `echo node_modules > .gitignore`.


# Exercise 1 - Intro Exercises

- 1. Prep (see exercise_1)
    - 1. Use these modules to make a request to an API and store the data in a text file
        - 1. fs - for reading and writing to a file
        - 2. process - for gathering arguments from the command line
        - 3. request - for making API requests (this is an external module)
    - 2. Accept command line argument from process.argv
    - 3. make a request to the dad joke API
    - 4. it should output a random joke if it finds one matching the term and should save the joke in `jokes.txt`
    - 5. Furthermore, use the `prompt` module to ask the user for input && your program should accept a command line argument called `leaderboard`
- 2. So there wasn't an answer to this
    - 1. I need help with the following:
        - 1. Appending to a txt file
        - 2. the process.argv
        
    - 2. My process
        - 1. Mkdir external_modules. npm init --y. add a main.js. node install request. add a jokes.txt
        - 2. main.js created constants for fs and request.
        - 3. I would've made a function for accepting the search argument before the request.
    

# Rithm Lesson 4 - Express.js

- Express is for building server side applications with ease

*See `lesson_4`.*

1. Create an `app.js` file before `npm init --y`
2. `npm install express`
3. add to the `app.js`
```
// require the express module
const express = require("express");
// create an object from the express function which we contains methods for making requests and starting the server
const app = express();

// create a route for a GET request to '/' - when that route is reached, run a function
app.get("/", function(request, response) {
  /* inside of this callback we have two large objects, request and response
        request - can contain data about the request (query string, url parameters, form data)
        response - contains useful methods for determining how to respond (with html, text, json, etc.)
    let's respond by sending the text Hello World!
    */
  return response.send("Hello World!");
});

// let's tell our server to listen on port 3000 and when the server starts, run a callback function that console.log's a message
app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});
```
4. start the server with `node app.js`. Go to `localhost:3000`. Stop the server with `cntrl + c`


***Nodemon***
https://nodemon.io/

- useful for restarting the server automatically when files are edited or if a server crashes.
- install it globally. `npm install -g nodemon`
- from now on you can `nodemon app.js` instead of `node app.js`


- Go from building static routes to dynamic routing. URL params exist in the request object 
- issue different responses on localhost:3000, like `localhost:3000/chicken/mitchell` -- you'll see a CANNOT GET
- Remember, **all URL parameters are strings**

- example of request.params for an inputted username inside of an `app.js`

```
const express = require('express');
const app = express();

app.get('/', function(request, response) {
  return response.send('Hello World!');
});

app.get('/user/:name', function(request, response) {
  return response.send(`Hello ${request.params.name}`);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```

# Rithm Lesson 5 - serving JSON with Express.js

- use the `.json()` method on a respone object to respond with JSON. These parameters are called `request` and `response` (`req` and `res`). like in this:
```
app.get("/", (req, res) => {
  res.json({ message: "That's it!" });
});

// or

app.get("/instructor", (req, res) => {
  res.json({ name: "Rupert" });
});

```
"I'ma keep it real with you chief, not sure what the "/" stands for."

- `.send()` vs `.json()`. These are two methods you use to send JSON from an express app back. 
- `.json` converts on objects (including null and undefined) to JSON and .`json` formats the response using settings defined in the application. 

"yeah ok but why tho"

- include a `body-parser` module which "parses" the "body" of the response. This is considered a "middleware" module, sitting between the request and response cycle which can modify either the request or response.
- because it's considered external middleware, you need a process to se it: 
    - 1. `npm install body-parser`
    - 2. `const bodyParser = require("body-parser")`
    - 3. use it `app.use(bodyParser())` notice the bodyParser variable
    - 4. data is sent to server collected insde of `req.body` the body definer of the request
    - 5. add an accompanying HTTP status code with the `.status` method and chain `.json`
```
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded 

app.get("/", (req, res) => {
  res.status(200).json({ name: "Elie" });
});

app.get("/secret", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});
```
"v confused but I understand the underlying pretext"





# Rising Stack Lesson 1 

Node.js is an open-source framework
Node.js is a cross-platform runtime environment for developing server-side and networking applications
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js utilizes libuv, a multi-platform support library with a focus on asynchronous I/O.

Node.js uses [libuv](https://github.com/libuv/libuv), a support library for asynchronous I/O. Libuv is this github repo handling threading, file system events, implenting the event loop, and thread pools

1. It's good practice to add a `start` script to the `package.json` after `npm init`. Helps with Platform as a Service?
2. keep your `index.js` file pretty lightweight

3. here's a starting point for the `.gitignore`
```
# Logs
logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# node-waf configuration
.lock-wscript

# Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules
jspm_packages

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history
```

- Node uses a version number MAJOR.MINOR.PATCH, increment the MAJOR version when you make incompatible API changes, MINOR version when you add functionality in a backwards-compatible manner, and PATCH version when you make backwards-compatible bug fixes.

4. minify JS files, concatenate CSS files, modules will only be run during the development, and running application doesn't need them. For example `npm install mocha --save-dev`

5. NPM scripts. The most commone ones are `start` and `test` scripts. Start defines how the application starts, test is for running tests. 
```
  "scripts": {
    "start": "node index.js",
    "test": "mocha test",
    "your-custom-script": "echo npm"
  }
```
"Start can be invoked with `npm start`, test uses mocha but it doesn't need to be installed globally and invoke it with `npm test`. Custom scripts can also be invoked"

Scoped packages - `@myorg/mypackage`


# Rising Stack Lesson 2 - HTTP module

- 1. require the http module in the `index.js`
- 2. bind the server to port 3000
```
// content of index.js
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
```
"`requestHandler` - function invoked everytime a request hits the server."

This is used to be how you had to do things, and then Express came along.

- 3. `npm install express --save`. The above becomes
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
```
- express, by default, gives you a router. You define the application's routing with `app.get`, `app.post`, `app.put`.
- "Middlewares" are "Unix Pipelines" but for HTTP requests.

```
const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)
```
"This has been upgraded with middlewares"
- 4. `app.use` is how you define the middlewares, takes a function with three parameters ( the request, the response, the `next` callback).
- 5. calling `next` signals express can jump to the next middleware or route handler.
- 6. Error Handling with a special middleware function with four parameters (error, request, response, next)
```
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  throw new Error('oops')
})

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})
```
"Ok i'ma keep it real, this last one was for error handling, but did each of these have their own place?"

***Handlebars***

- 7. The `handlebars` package with the `express-handlebars` wrapper is good for looking how to send JSON responses for rendering HTML. Start with a `npm install express-handlebars`.

- 8. You are now going to create the `views` folder in the main directory. There are two methods to remember (this guy is caling them part of an "exported engine factory")
    - 1. `ExpressHandlebars()` is a "constructor function" "holing the internal implementation of its prototype" producing instance objects that store their configuration, `compiled` and `precompiled` templates, and expose an `engine()` function which can be registered with an Express application". Jesus.
    - 2. `create()` is a convenience factory function.
    



# Regrets of Node.js

Source: [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018](https://www.youtube.com/watch?v=M3BM9TB-8yA)
- 1. Promises were removed in February 2010, and they are necessary abstractions for async/await. Unified usage of promises would have sped the delivery of the standardization. Node's async APIs are aging badly
- 2. Security, V8 is a good sandbox, Node should have mhad more guarantees, like your linter should get access to your computer and network.
- 3. The build system (GYP), build systems are very difficult. GYP is the biggest failure of Node core. The fuck is an FFI?
- 4. Package.json - it's unfortunate to have a centralized, privaely controlled repository for mudles. 
- 5. node modules massively complicates module resolution algorithm. "vendored-by-default" is the name of the practice. Environmental variables are different than how browsers work.
- 6. require a module without the extension ".js", it's needlessly less explicit. The module loader has to query the file system at multiple locations trying to gues what the user intended
- 7. index.js - nedlessly complicated the module loading system
- Javascript is the bst dynamic language. Go is the best for fast servers. 
in the future, look into Deno and Tokio.


# Questions

- 1. What's the syntax requirement for the `${answer}`, it's a parameter being console logged
- 2. When do you use the readline?
- 3. What's the difference between middleware and route handlers?
- 4. Learn the role of partials
- 
   