
---

# 🔢 Variables & Data Types in JavaScript

---

## 🧠 What is a Variable?

A **variable** is like a container that stores **data** in memory.

```js
let name = "Ranjit";
```

Here:

* `name` is the variable
* `"Ranjit"` is the value
* `let` is the keyword to declare the variable

---

## 🔄 JavaScript Variable Declarations

### 🔸 1. `var` (Old Way – **Avoid** using now)

```js
var age = 25;
```

#### Problems with `var`:

1. **Function-scoped** → can be accessed outside block (❌ Bad for security & logic)
2. **Can be re-declared** → creates confusion and bugs
3. **Hoisting** → moves variable to the top without value (causes `undefined` issues)

```js
var x = 10;
var x = 20; // ✅ Allowed, but confusing

console.log(x); // 20
```

🔴 **Why we avoid `var` today?**
Because it can lead to unexpected results, especially in larger programs.

---

### 🔹 2. `let` (✅ Preferred for values that change)

```js
let score = 100;
score = 150; // ✅ allowed

console.log(score); // 150
```

* Block scoped `{}` → only accessible inside the block
* Cannot be re-declared in the same scope
* **Best for values that change** over time (score, counter, etc.)

---

### 🔸 3. `const` (✅ Preferred for values that don’t change)

```js
const pi = 3.14;
pi = 4; // ❌ Error: Assignment to constant variable
```

* Block scoped
* Must be initialized when declared
* Cannot be changed (for **primitive** values)

```js
const person = { name: "Ranjit" };
person.name = "Kadam"; // ✅ Allowed because object itself isn’t reassigned

console.log(person.name); // "Kadam"
```

> ✅ Use `const` by default, and switch to `let` **only** when you need to reassign a value.

---

## 📦 JavaScript Data Types

JavaScript has **two main types** of data:

---

### 🟢 **1. Primitive Data Types (Stored by value)**

These hold a **single value**, not objects.

| Type        | Example         | Description                     |
| ----------- | --------------- | ------------------------------- |
| `string`    | `"Hello"`       | Text data                       |
| `number`    | `42`, `3.14`    | Integer or decimal              |
| `boolean`   | `true`, `false` | Logic values                    |
| `null`      | `null`          | Empty value intentionally       |
| `undefined` | `undefined`     | No value assigned yet           |
| `symbol`    | `Symbol('id')`  | Unique and immutable identifier |
| `bigint`    | `1234567890n`   | For very large integers         |

---

#### 🧪 Examples:

```js
let name = "Ranjit";      // string
let age = 21;             // number
let isStudent = true;     // boolean
let score = null;         // null
let id;                   // undefined (no value assigned)
let unique = Symbol("id"); // symbol
let bigNumber = 123456789012345678901234567890n; // bigint
```

---

### 🔵 **2. Non-Primitive Data Types (Stored by reference)**

These can hold **collections or functions**.

| Type       | Example          | Description              |
| ---------- | ---------------- | ------------------------ |
| `object`   | `{ key: value }` | Group of key-value pairs |
| `array`    | `[1, 2, 3]`      | Ordered list of items    |
| `function` | `function(){}`   | Reusable block of code   |

---

#### 🧪 Examples:

```js
let person = { name: "Ranjit", age: 22 };  // object
let numbers = [1, 2, 3, 4];                // array
function greet() {
  console.log("Hello");
}
```

> ✅ Arrays and functions are technically **objects** in JavaScript.

---

## 📏 `typeof` Operator

Used to check the **data type** of a value:

```js
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof null);        // 🔸 "object" (known JS bug!)
console.log(typeof undefined);   // "undefined"
console.log(typeof [1,2,3]);     // "object"
console.log(typeof function(){}); // "function"
```

> 🔍 `typeof null` returning `"object"` is a **historical bug** in JavaScript.

---

## ✅ Best Practices for Declaring Variables

| Situation           | Use                        |
| ------------------- | -------------------------- |
| Value never changes | `const` ✅ (default choice) |
| Value may change    | `let`                      |
| Avoid at all cost   | `var` ❌                    |

---

## 🔚 Summary

* Use **`let`** when the value **might change**
* Use **`const`** for values that **don’t change**
* Avoid **`var`** because of scoping and re-declaration issues
* Know the difference between **primitive (by value)** and **non-primitive (by reference)** types
* Use `typeof` to check types

---
