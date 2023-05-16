// ES12 = ECMAScript2021 && ES13 = ECMAScript2022

// 1.Private class methods, no constructor

class Person {
  #name = "Jack";
  surname = "Sparrow";
  #greet() {
    return `Hello ${this.#name}`;
  }
  getName() {
    return this.#name;
  }
  sayHello() {
    return this.#greet();
  }
}

const person = new Person();
person.getName(); // Jack
person.sayHello(); // Hello Jack
// person.#name; // SyntaxError: Private field '#name' must be declared in an enclosing class
// person.#greet(); // SyntaxError: Private field '#greet' must be declared in an enclosing class

class OldPerson {
  constructor() {
    this._name = "Jack";
  }
  greet() {
    return `Hello ${this._name}`;
  }
}

const oldPerson = new OldPerson();
// oldPerson._name;

// 2. nullish coalescing operator (??)
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
const orOperator = 0 || "Hello"; // "Hello"
const nullishCoalescingOperator = 0 ?? "Hello"; // 0

// 3. Logical Assignment Operators
// 3.1 Logical OR assignment (||=)
// (x ||= y) operator only assigns if x is falsy.
const a = { duration: 50, title: "" };
a.duration ||= 10;
a.title ||= "title is empty.";
a.duration; // 50
a.title; // "title is empty."

// 3.2 Logical AND assignment (&&=)
// (x &&= y) operator only assigns if x is truthy.
const b = { duration: 50, title: "" };
b.duration &&= 10;
b.title &&= "title is empty.";
b.duration; // 10
b.title; // ""

// 3.3 Logical nullish assignment (??=)
// (x ??= y) operator only assigns if x is nullish (null or undefined).
const c = { duration: 50, title: "", description: null };
c.duration ??= 10;
c.title ??= "title is empty.";
c.description ??= "new description";
c.duration; // 50
c.title; // ""
c.description; // ""

// 4. Numeric separators
// Numeric separators are underscores (_) that can be used as separators to make numeric literals more readable.
const budget = 1_000_000_000_000;
budget; // 1000000000000

// 5. Promise.any
// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills,
// returns a single promise that resolves with the value from that promise.
// If all of the given promises are rejected, then the returned promise is rejected with an AggregateError,
// a new subclass of Error that groups together individual errors.

const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "one")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "two")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "three")
);

// Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));
// expected output: "two"

// all rejected promises
const promise4 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "four")
);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "five")
);
const promise6 = new Promise((resolve, reject) =>
  setTimeout(reject, 1100, "six")
);

// Promise.any([promise4, promise5, promise6]).catch((error) =>
//   console.log(error)
// );
// expected output: "AggregateError: All promises were rejected"

// 6. array.prototype.at
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
const array = [1, 2, 3, 4, 5];
array.at(-2); // 4
array[array.length - 2]; // 4
