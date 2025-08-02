
---

# 📘 1. Basics of JavaScript

---

## 🟡 **What is JavaScript?**

**JavaScript** is a **programming language** used to make websites **interactive**.

🔹 HTML = Structure
🔹 CSS = Styling
🔹 **JavaScript = Behavior (interactions like clicks, animations, data fetching, etc.)**

**Examples of what JavaScript can do:**

* Show/hide content on button click
* Validate forms
* Create slideshows
* Fetch data from an API
* Build games, chat apps, etc.

> 🧠 JavaScript was created in **1995 by Brendan Eich** in just 10 days!

---

## 🧠 **JavaScript Engines (V8, SpiderMonkey, etc.)**

JavaScript needs to be **understood and executed by a machine**, and this is done by a **JavaScript engine**.

Each browser has its own engine:

| Browser | Engine                        |
| ------- | ----------------------------- |
| Chrome  | V8                            |
| Firefox | SpiderMonkey                  |
| Safari  | JavaScriptCore                |
| Edge    | Chakra (now Chromium uses V8) |

🔧 The **engine converts JavaScript code into machine code** that your computer understands.

> 📝 **V8** (used in Chrome and Node.js) is one of the fastest JS engines.

---

## 🌐 **JavaScript in Browsers vs Node.js**

| Feature       | In Browser               | In Node.js                |
| ------------- | ------------------------ | ------------------------- |
| Used for      | Web Pages                | Backend/server-side       |
| JS Engine     | V8                       | V8                        |
| Has access to | DOM, BOM (window, alert) | File system, network, OS  |
| Can't access  | File system directly     | DOM or browser objects    |
| Example       | Form validation          | API server, DB connection |

> 💡 Think of **JavaScript in the browser** as working with **webpages**, and **Node.js** as using JS to work with **files, servers, databases** on your computer or server.

---

## 🧬 **How JavaScript Runs in the Browser**

When a web page loads, the browser:

1. **Downloads the HTML file**
2. **Parses HTML** and finds `<script>` tags
3. Loads and runs the **JavaScript**
4. JavaScript interacts with the **DOM (Document Object Model)**

### Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <button onclick="sayHello()">Click me</button>

    <script>
      function sayHello() {
        alert("Hello from JavaScript!");
      }
    </script>
  </body>
</html>
```

✅ When you click the button, JS runs and shows an alert.

---

## 🔗 **Linking JavaScript to HTML (`<script>` tag)**

There are **3 ways** to add JavaScript to an HTML file:

### 1. **Inline JavaScript**

Inside HTML tag:

```html
<button onclick="alert('Clicked!')">Click</button>
```

---

### 2. **Internal JavaScript**

Inside a `<script>` tag:

```html
<script>
  function greet() {
    alert("Welcome!");
  }
</script>
<button onclick="greet()">Click Me</button>
```

---

### 3. **External JavaScript**

Linking an external `.js` file:

```html
<!-- HTML file -->
<script src="script.js"></script>
```

```js
// script.js file
alert("Page Loaded!");
```

> ✅ Best practice: Keep JavaScript in a separate `.js` file for cleaner code and reusability.

---

## 🖨️ **`console.log()` & Comments**

### ✅ `console.log()`

Used to **print values** in the browser **console** (for debugging and checking values):

```js
console.log("Hello, world!");
```

Open browser dev tools (F12 → Console tab) to see the output.

---

### ✅ Comments

Comments are lines that **don’t run**, meant for **explaining code**.

#### Single-line comment:

```js
// This is a single-line comment
console.log("Hello");
```

#### Multi-line comment:

```js
/* This is a
   multi-line comment */
console.log("Hello");
```

---

## ✅ Summary Table

| Concept         | Use                             |
| --------------- | ------------------------------- |
| `console.log()` | Print output to browser console |
| `// comment`    | Add short single-line comment   |
| `/* comment */` | Add longer/multiline comments   |
| `<script>` tag  | Embed or link JS to HTML        |
| JS in browser   | Make websites interactive       |
| JS engine       | Converts JS to machine code     |

---
