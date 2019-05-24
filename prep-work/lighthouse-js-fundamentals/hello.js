console.log("Hello, Caliban");
console.log("Hello, Miranda");
console.log("Hello, Ferdinand");

function sayHello() {
  console.log("Hello, world");
}

function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

function sayHelloToConsole(name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('John');

function returnSayHello(name) {
  return "Hello, " + name;
}

var greeting = returnSayHello('John');
console.log(greeting);
