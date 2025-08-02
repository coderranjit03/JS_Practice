
---

# 🔁 2. Control Flow in JavaScript 


---

# ✅ `if`, `else if`, `else` in JavaScript (from Scratch)

---

## 🧠 What is Control Flow?

Control Flow is **the order in which the code executes**.

* Without conditions, the code runs **top to bottom**.
* With `if`, `else if`, and `else`, you tell JavaScript to make **decisions**:

  * “If this is true, do that.”
  * “Otherwise, do something else.”

---

## 🔷 `if` Statement — Basics

The `if` statement checks a **condition** (a true/false expression).
If it's true, the code inside runs.

### 🔹 Syntax:

```js
if (condition) {
  // runs only if condition is true
}
```

### 🔹 Example:

```js
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote!");
}
```

📝 **Explanation**:

* Condition: `age >= 18`
* Since age is 18, the condition is true, so the message prints.

---

## 🔶 `else` — Default Case

If the `if` condition is false, the `else` block runs instead.

### 🔹 Syntax:

```js
if (condition) {
  // if true
} else {
  // if false
}
```

### 🔹 Example:

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are too young to vote.");
}
```

📝 **Output**: `"You are too young to vote."`

---

## 🔷 `else if` — Multiple Conditions

Use `else if` when you want to check **more than one condition**.

### 🔹 Syntax:

```js
if (condition1) {
  // if condition1 is true
} else if (condition2) {
  // if condition1 is false, and condition2 is true
} else {
  // if none are true
}
```

---

### 🔹 Example:

```js
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

📝 **Output**: `"Grade B"`

### 🔍 What happened?

* `score >= 90` ❌ false
* `score >= 75` ✅ true → `"Grade B"` is printed
* Later conditions (`score >= 60` and `else`) are **skipped**

---

## 🧪 Real-life Example:

```js
let temperature = 35;

if (temperature > 40) {
  console.log("Too hot!");
} else if (temperature > 30) {
  console.log("Warm day.");
} else if (temperature > 20) {
  console.log("Pleasant weather.");
} else {
  console.log("Cold day.");
}
```

**Output**: `"Warm day."`

---

## ⚠️ Important Notes

| Concept                            | Explanation                                                    |
| ---------------------------------- | -------------------------------------------------------------- |
| Only one block runs                | As soon as one condition is true, others are **ignored**       |
| Conditions check **top to bottom** | Order matters — JavaScript checks from top to bottom           |
| `else` is optional                 | You can use `if` without `else`                                |
| Use `{}` always (best practice)    | Even for one line, use curly braces for readability and safety |

---

## 🧱 Nested `if` Statements

You can put one `if` inside another for **more complex decisions**.

```js
let age = 25;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can enter.");
  } else {
    console.log("ID required.");
  }
} else {
  console.log("You are too young.");
}
```

---

## ✅ Common Use Cases

* Login authentication
* Showing/hiding UI elements
* Grading systems
* Access control (age, permission level)
* Conditional rendering in React

---

## 📌 Summary 

| Statement | Runs when...                    |
| --------- | ------------------------------- |
| `if`      | Condition is **true**           |
| `else if` | `if` is false, and this is true |
| `else`    | All above are false             |

---

# 🔀 `switch` Statement in JavaScript (Full Guide)

---

## 🧠 What is a `switch` Statement?

A `switch` statement is a **control flow** structure used to **compare a variable/expression with multiple possible values** and execute **only the matching case**.

It is an alternative to writing multiple `if-else if-else` statements when you're comparing the same variable/expression to different values.

---

## 🔹 Syntax:

```js
switch (expression) {
  case value1:
    // code to run if expression === value1
    break;

  case value2:
    // code to run if expression === value2
    break;

  ...

  default:
    // code to run if none of the above match
}
```

---

## 🔍 Important Concepts

| Keyword   | Purpose                                                |
| --------- | ------------------------------------------------------ |
| `switch`  | Starts the statement                                   |
| `case`    | A possible value to match                              |
| `break`   | Exits the switch after a match (prevents fall-through) |
| `default` | Runs if no `case` matches (like `else`)                |

---

## ✅ Basic Example

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
```

🟢 **Output**: `"Wednesday"`

---

## ⚠️ What if you forget `break`?

```js
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple pie");
  case "banana":
    console.log("Banana shake");
  default:
    console.log("Unknown fruit");
}
```

🟠 **Output**:

```
Apple pie
Banana shake
Unknown fruit
```

### ❗ Why?

* Without `break`, **all following cases will run** even if the first one matches — this is called **fall-through** behavior.

---

## ✅ Using `default` (Optional)

`default` runs if **none of the cases match**.

```js
let color = "purple";

switch (color) {
  case "red":
    console.log("Red Alert");
    break;
  case "blue":
    console.log("Cool Blue");
    break;
  default:
    console.log("Color not recognized");
}
```

🟢 **Output**: `"Color not recognized"`

---

## 💡 Real-Life Example

```js
let userRole = "admin";

switch (userRole) {
  case "guest":
    console.log("Read-only access");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "admin":
    console.log("Full access");
    break;
  default:
    console.log("Unknown role");
}
```

🟢 **Output**: `"Full access"`

---

## 🧠 When Should You Use `switch`?

| Use `if-else` when… | Use `switch` when…  |              ||
| ------------------------------------------------------ | --------------------------------------------------------------- | ------------ | --------------------------------- |
| You need to check **ranges** or **complex conditions** | You're comparing a **single variable** to **many fixed values** |              |                                   |
| Logical operators (`&&`, `  | | `) are used | Values are **exact and distinct** |
| Expressions vary on each condition                     | One expression is compared repeatedly                           |              |                                   |

---

## 🔂 Grouping Cases (Fall-Through **On Purpose**)

You can group multiple cases to run the same code:

```js
let letter = 'A';

switch (letter) {
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log("It's a vowel");
    break;
  default:
    console.log("It's a consonant");
}
```

🟢 **Output**: `"It's a vowel"`

---

## ❌ `switch` Limitations

* Doesn’t work well with **complex conditions** (e.g., `if (x > 5 && x < 10)`)
* Only checks **strict equality** (`===`)
* Cannot check **ranges**, types, or conditions involving more than one variable

---

## 🧪 Advanced Example: Numbers & Math

```js
let score = 85;

switch (true) {
  case (score >= 90):
    console.log("Grade A");
    break;
  case (score >= 80):
    console.log("Grade B");
    break;
  case (score >= 70):
    console.log("Grade C");
    break;
  default:
    console.log("Fail");
}
```

🟢 **Output**: `"Grade B"`

✅ Here, we used `true` as the expression to allow **range conditions**, simulating `if-else if` behavior.

---

## 📝 Summary

| Keyword   | Description                               |
| --------- | ----------------------------------------- |
| `switch`  | Starts the conditional check block        |
| `case`    | Each possible value to check              |
| `break`   | Ends current case to prevent fall-through |
| `default` | Fallback if no `case` matches             |

---

# 🔁 JavaScript Loops: `for`, `while`, `do...while`

Loops allow you to **repeat a block of code** as long as a specified condition is true. They are fundamental in programming for doing repetitive tasks like processing arrays, generating content, or performing calculations.

---

## ✅ 1. `for` Loop

### 📌 Syntax:

```js
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

| Part                  | Description                                    |
| --------------------- | ---------------------------------------------- |
| `initialization`      | Runs once before the loop starts               |
| `condition`           | Checked before every loop iteration            |
| `increment/decrement` | Updates the loop variable after each iteration |

---

### 🧠 Example: Count from 1 to 5

```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

🟢 **Output:**

```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

---

### 🔄 Flow Diagram:

```
1️⃣ Initialization (i = 1)
🔁 Is i <= 5? → Yes
✅ Execute block → Print i
➕ Increment i
🔁 Repeat until i > 5
```

---

### 💡 Use Case:

Looping through arrays or when you **know** how many times you need to repeat something.

---

## ✅ 2. `while` Loop

### 📌 Syntax:

```js
while (condition) {
  // code to be executed
}
```

> The loop runs **as long as the condition is true.**

---

### 🧠 Example: Print numbers 1 to 5

```js
let i = 1;

while (i <= 5) {
  console.log("While loop:", i);
  i++;
}
```

🟢 **Output:**

```
While loop: 1
While loop: 2
While loop: 3
While loop: 4
While loop: 5
```

---

### 🔄 Flow Diagram:

```
1️⃣ Set i = 1
🔁 Is i <= 5? → Yes
✅ Execute block → Print i
➕ Increment i
🔁 Repeat until condition is false
```

---

### ⚠️ Infinite Loop Warning:

Be careful! If the condition **never becomes false**, the loop runs forever.

```js
while (true) {
  console.log("This will never end...");
}
```

Use `break` or a proper condition to avoid this.

---

### 💡 Use Case:

Use `while` when you **don’t know ahead of time** how many iterations you'll need.
For example: waiting for user input, checking API data, etc.

---

## ✅ 3. `do...while` Loop

### 📌 Syntax:

```js
do {
  // code to execute
} while (condition);
```

> Executes the **block first**, then checks the condition.
> So it **always runs at least once**.

---

### 🧠 Example: Ask password at least once

```js
let password;

do {
  password = prompt("Enter password:");
} while (password !== "admin123");

console.log("Access granted");
```

💬 **Output:**

```
(prompt keeps asking until correct password is entered)
```

---

### 🔄 Flow Diagram:

```
✅ Execute block
🔁 Check condition
🔁 Repeat if true
```

---

### 💡 Use Case:

Perfect when you want to run code **at least once**, like asking for user input or loading something.

---

## ⚖️ Comparison Table

| Feature                 | `for`                         | `while`                       | `do...while`                  |
| ----------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| Pre-check condition     | ✅ Yes                         | ✅ Yes                         | ❌ No (post-check)             |
| Run at least once?      | ❌ No                          | ❌ No                          | ✅ Yes                         |
| Use when…               | You know number of iterations | You don’t know how many times | Run code once before checking |
| Initialization in loop? | ✅ Yes                         | ❌ No (done outside)           | ❌ No                          |

---

## 📝 Summary Notes

* `for` = known number of iterations
* `while` = unknown, pre-check
* `do...while` = unknown, but want to run once minimum
* Don't forget to update your loop variable or risk an infinite loop!
* You can use `break` to exit early, or `continue` to skip current iteration

---


# 🔄 `for...in` vs `for...of`

| Loop Type  | Purpose                          | Works on                                      |
| ---------- | -------------------------------- | --------------------------------------------- |
| `for...in` | Iterate over **keys/properties** | Objects, Arrays (indexes)                     |
| `for...of` | Iterate over **values**          | Iterables (Arrays, Strings, Maps, Sets, etc.) |

---

## 🔸 1. `for...in` Loop

### ✅ Purpose:

Used to **iterate over enumerable properties (keys)** of an object or indexes of an array.

---

### 📌 Syntax:

```js
for (let key in object) {
  // use object[key]
}
```

---

### 🧠 Example: Loop through object properties

```js
const person = {
  name: "Alice",
  age: 25,
  city: "Mumbai"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

🔹 **Output:**

```
name: Alice
age: 25
city: Mumbai
```

---

### ⚠️ Warning with Arrays:

```js
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index);       // index, not the value
  console.log(colors[index]); // accessing value using index
}
```

🔹 **Output:**

```
0
red
1
green
2
blue
```

🔴 `for...in` is **not recommended for arrays** because:

* Order is **not guaranteed**
* Iterates over **enumerable properties**, including any custom properties added to the array

---

## 🔸 2. `for...of` Loop

### ✅ Purpose:

Used to iterate over **values** of **iterable objects** like:

* Arrays
* Strings
* Maps
* Sets
* `arguments` object

---

### 📌 Syntax:

```js
for (let value of iterable) {
  // use value
}
```

---

### 🧠 Example: Loop through an array

```js
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

🔹 **Output:**

```
apple
banana
cherry
```

---

### 🧠 Example: Loop through a string

```js
const greeting = "Hello";

for (let char of greeting) {
  console.log(char);
}
```

🔹 **Output:**

```
H
e
l
l
o
```

---

### 🧠 Example: Loop through a Set

```js
const ids = new Set([101, 102, 103]);

for (let id of ids) {
  console.log(id);
}
```

---

## ⚖️ Comparison: `for...in` vs `for...of`

| Feature             | `for...in`                             | `for...of`                          |
| ------------------- | -------------------------------------- | ----------------------------------- |
| Iterates over       | Property **keys** (index or name)      | Property **values**                 |
| Works on            | Objects, Arrays                        | Iterables (Arrays, Strings, Sets…)  |
| Returns             | Keys (strings)                         | Values                              |
| Best used for       | Objects                                | Arrays, Strings, Maps, Sets         |
| Not recommended for | Arrays (can include custom properties) | Objects (unless object is iterable) |
| Example output      | `0`, `1`, `2` for array indexes        | `"apple"`, `"banana"`, `"cherry"`   |

---

## 🧪 Practice Example:

```js
const user = {
  username: "ranjit",
  age: 21,
  role: "student"
};

const languages = ["JavaScript", "Python", "Java"];

console.log("Using for...in:");
for (let key in user) {
  console.log(key + ":", user[key]);
}

console.log("Using for...of:");
for (let lang of languages) {
  console.log(lang);
}
```

---

## ❗ Common Errors

* Trying to use `for...of` on plain objects will throw an error:

```js
const obj = { a: 1, b: 2 };
for (let val of obj) {
  console.log(val); // ❌ TypeError: obj is not iterable
}
```

✅ You should use `for...in` for objects or use `Object.entries()` with `for...of`:

```js
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

---

## 📝 Summary Notes:

| Use Case                            | Use This                        |
| ----------------------------------- | ------------------------------- |
| Loop through object keys/props      | `for...in`                      |
| Loop through array or string values | `for...of`                      |
| Loop through iterable (Set, Map)    | `for...of`                      |
| Loop through object values safely   | `Object.entries()` + `for...of` |

---


# 🔄 `break` and `continue` in JavaScript

## ✅ What are they?

| Statement  | Purpose                                                                         |
| ---------- | ------------------------------------------------------------------------------- |
| `break`    | Immediately **exits the loop** or `switch` block                                |
| `continue` | **Skips the current iteration** and jumps to the **next iteration** of the loop |

---

## 🔹 1. `break` Statement

### ✅ Use Case:

Used when you want to **stop a loop completely** before it finishes all iterations.

### 📌 Syntax:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

### 🧠 Output:

```
0
1
2
3
4
```

### 💡 Explanation:

* When `i` becomes `5`, the `break` statement runs.
* It **exits the loop** immediately, so `5, 6, 7, 8, 9` are **never printed**.

---

### 🧪 Real-world Example:

```js
const items = ["pen", "pencil", "eraser", "book"];

for (let item of items) {
  if (item === "eraser") {
    console.log("Found the eraser! Stopping search.");
    break;
  }
  console.log("Checking:", item);
}
```

**Output:**

```
Checking: pen  
Checking: pencil  
Found the eraser! Stopping search.
```

---

## 🔹 2. `continue` Statement

### ✅ Use Case:

Used when you want to **skip the current iteration** and move to the **next one**, **without exiting the loop**.

### 📌 Syntax:

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

### 🧠 Output:

```
1
2
4
5
```

### 💡 Explanation:

* When `i` is `3`, `continue` skips printing it and jumps to the **next iteration**.
* All other values print normally.

---

### 🧪 Real-world Example:

```js
const scores = [85, 0, 90, 100, 0, 95];

for (let score of scores) {
  if (score === 0) {
    console.log("Invalid score. Skipping.");
    continue;
  }
  console.log("Score:", score);
}
```

**Output:**

```
Score: 85  
Invalid score. Skipping.  
Score: 90  
Score: 100  
Invalid score. Skipping.  
Score: 95
```

---

## 🔁 `break` vs `continue` — Summary

| Feature  | `break`                                    | `continue`                                      |
| -------- | ------------------------------------------ | ----------------------------------------------- |
| Purpose  | Exits the loop entirely                    | Skips one iteration, continues loop             |
| Use case | When a condition is met and loop must stop | When a condition is met but you want to skip it |
| Effect   | Control **leaves** the loop                | Control **jumps to next iteration**             |

---

## 🔄 Supported In:

| Loop Type    | `break` | `continue`         |
| ------------ | ------- | ------------------ |
| `for`        | ✅       | ✅                  |
| `while`      | ✅       | ✅                  |
| `do...while` | ✅       | ✅                  |
| `switch`     | ✅       | ❌ (not valid here) |

---

## ✅ Final Tips:

* Use `break` when you want to **stop looping completely**.
* Use `continue` when you want to **ignore certain conditions** but still keep looping.
* Avoid using them excessively—it may make your code harder to read.

---

> ✅ `forEach()`, `map()`, `filter()`, and `reduce()`
> These methods help you work with arrays in a **clean**, **declarative**, and **functional** way.

---

# 🔁 `Array.forEach()` | 🔄 Looping over elements

### ✅ Purpose:

Executes a function **once for each element** in an array (like a `for` loop). It doesn’t return anything.

### 🧠 Syntax:

```js
array.forEach((value, index, array) => {
  // Your logic here
});
```

* `value` – current item
* `index` – current index
* `array` – the full array (optional)

### ✅ Example:

```js
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

**Output:**

```
0: apple  
1: banana  
2: cherry
```

### ⚠️ Note:

* `forEach()` **does NOT return a new array**.
* It’s best for **side effects**, like logging, updating DOM, etc.

---

# 🔄 `Array.map()` | 🔧 Transforming data

### ✅ Purpose:

Creates a **new array** by applying a function to **each element** in the original array.

### 🧠 Syntax:

```js
const newArray = array.map((value, index, array) => {
  return value * 2;
});
```

### ✅ Example:

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### 💡 Use Case:

* Transforming/Modifying each item of the array without changing the original.

---

# 🔍 `Array.filter()` | 🎯 Filtering values

### ✅ Purpose:

Returns a **new array** with only the **elements that pass a condition**.

### 🧠 Syntax:

```js
const filteredArray = array.filter((value, index, array) => {
  return condition;
});
```

### ✅ Example:

```js
const numbers = [10, 25, 30, 45];
const above30 = numbers.filter(num => num > 30);
console.log(above30); // [45]
```

### 💡 Use Case:

* Filtering out elements that match a condition (e.g., even numbers, age > 18, etc.)

---

# 🧮 `Array.reduce()` | 💥 Reducing to a single value

### ✅ Purpose:

**Reduces** the entire array into **a single value** (like sum, product, object, etc.).

### 🧠 Syntax:

```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, initialValue);
```

* `accumulator`: result carried over each iteration
* `currentValue`: current array item
* `initialValue`: starting value

---

### ✅ Example 1: Sum of all numbers

```js
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 10
```

### ✅ Example 2: Convert array to object

```js
const colors = ['red', 'green', 'blue'];
const colorObj = colors.reduce((acc, color, index) => {
  acc[index] = color;
  return acc;
}, {});
console.log(colorObj); // {0: "red", 1: "green", 2: "blue"}
```

---

# 📊 Summary 

| Method      | Returns New Array? | Use Case                      | Side Effects |
| ----------- | ------------------ | ----------------------------- | ------------ |
| `forEach()` | ❌                  | Just loop over elements       | ✅ Allowed    |
| `map()`     | ✅                  | Transform each item (1-to-1)  | ❌ Avoid      |
| `filter()`  | ✅                  | Select subset of items        | ❌ Avoid      |
| `reduce()`  | ❌ (Any value)      | Combine items to single value | ❌ Avoid      |

---

# ✅ Real World Use Case Example

```js
const users = [
  { name: "Ranjit", age: 22 },
  { name: "Ravi", age: 17 },
  { name: "Anita", age: 19 }
];

// Get names of users who are 18+
const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(adultNames); // ["Ranjit", "Anita"]
```

---





## 📌 Summary Table

| Concept      | Purpose                                  |
| ------------ | ---------------------------------------- |
| `if / else`  | Conditional logic                        |
| `switch`     | Match one value against multiple cases   |
| `for`        | Loop when you know how many times        |
| `while`      | Loop while a condition is true           |
| `do...while` | Loop at least once                       |
| `break`      | Exit loop early                          |
| `continue`   | Skip current loop iteration              |
| `for...in`   | Loop through object properties (keys)    |
| `for...of`   | Loop through array or string values      |
| `forEach()`  | Run function on each array item          |
| `map()`      | Create new array with transformed values |
| `filter()`   | Create new array with filtered values    |
| `reduce()`   | Convert array to a single value          |

---

