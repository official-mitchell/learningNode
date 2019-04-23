const url = require('url');
const myUrl = new URL('https://mywebsite.com/hello.html?id=100%status=active');

// Serialized URL --> https://mywebsite.com/hello.html?id=100%status=active
console.log(myUrl.href);
console.log(myUrl.toString());

// host (root domain) --> mywebsite.com:port8000
console.log(myUrl.host);

//Hostname (does not get port) --> mywebsite.com
console.log(myUrl.hostname);

// pathname --> /hello.html 
console.log(myUrl.pathname);

// Serialized query --> ?id=100%status=active
console.log(myUrl.search);

// Params object --> { 'id' => '100', 'status' => 'active' }
console.log(myUrl.searchParams);

// add param --> { 'id' => '100', 'status' => 'active', 'abc' => '123'  }
myUrl.searchParams.append('abc', '123');

// loop through param -> (each key value pair)
    // id: 100
    // status: active
    // abc: 123
myUrl.searchParams.forEach((value, name) => console.log('${name}: ${value}'));


