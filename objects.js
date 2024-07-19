// Constructor

const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
}



// Factory function

function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName};
};



// Factory function with private variables

function createUser (name) {
  const discordName = "@" + name;
  
  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation};
};



// Factory function with prototypical inheritance

function createPlayer (name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel};
}

function createPlayer (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}



// Module pattern - to just encapsulate data or functions
// IIFE (Invoked Function Expressions) - wrapping factory function in parentheses and immediately calling(invoking) it.

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div}; 
})



// Classes

class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is ${this.name} and I am ${this.age} years old.");
  }
}



// Classes with private fields

class Person {

  #name; // optional declaration - common practice

  constructor(name) {
      this.#name = name;
  }

  getName() {
      return this.#name;
  }

  setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
          this.#name = newName;
      } else {
          console.error('Invalid name');
      }
  }
}


// Classes with private methods - belongs to the class itselft, not to the instance of class
// Dont have access to instance properties or methods, cannot access "this", usefull for utility functions

class MathUtilities {

  static add(a, b) {
      return a + b;
  }


  static multiply(a, b) {
      return a * b;
  }
}