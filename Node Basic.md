# Node Basic

Approach:
- Work through Node.js on Rithm
- watch supporting material on youtube and lynda
- push through on learning apps


# Lesson 1 - Common.js Modules
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
  
  
# Destructuring Notes
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


# Lesson 2 - Core Node.js Modules