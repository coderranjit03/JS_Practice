
---

# 🔁 JavaScript Operators (Detailed Guide)

Operators are symbols that perform **operations on values or variables**.

---

## ➕ 1. **Arithmetic Operators**

Used to perform **basic math** operations.

| Operator | Meaning             | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `5 + 2`  | `7`    |
| `-`      | Subtraction         | `5 - 2`  | `3`    |
| `*`      | Multiplication      | `5 * 2`  | `10`   |
| `/`      | Division            | `10 / 2` | `5`    |
| `%`      | Modulus (remainder) | `7 % 2`  | `1`    |

### 🧪 Examples:

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

---

## 📝 2. **Assignment Operators**

Used to **assign values** to variables.

| Operator | Meaning             | Example  | Equivalent  |
| -------- | ------------------- | -------- | ----------- |
| `=`      | Assign              | `x = 10` | -           |
| `+=`     | Add and assign      | `x += 5` | `x = x + 5` |
| `-=`     | Subtract and assign | `x -= 3` | `x = x - 3` |
| `*=`     | Multiply and assign | `x *= 2` | `x = x * 2` |
| `/=`     | Divide and assign   | `x /= 2` | `x = x / 2` |
| `%=`     | Modulus and assign  | `x %= 3` | `x = x % 3` |

### 🧪 Example:

```js
let x = 10;

x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x %= 4;  // x = 2

console.log(x); // 2
```

---

## ❓ 3. **Comparison Operators**

Used to **compare values**. They return a **boolean** (`true` or `false`).

| Operator | Meaning               | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal (loose)         | `5 == '5'`  | `true`  |
| `===`    | Equal (strict)        | `5 === '5'` | `false` |
| `!=`     | Not equal (loose)     | `5 != '5'`  | `false` |
| `!==`    | Not equal (strict)    | `5 !== '5'` | `true`  |
| `>`      | Greater than          | `7 > 5`     | `true`  |
| `<`      | Less than             | `7 < 5`     | `false` |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `4 <= 3`    | `false` |

### 🧪 Example:

```js
console.log(5 == '5');    // true (type is ignored)
console.log(5 === '5');   // false (strict check)
console.log(5 !== 5);     // false
console.log(6 > 3);       // true
console.log(10 <= 10);    // true
```

> ✅ Always prefer **`===`** and **`!==`** to avoid type coercion issues.

---

## 🧠 4. **Logical Operators**

Used to combine **multiple conditions**.

| Operator         | Meaning        | Example           | Result  |
|------------------|----------------|-------------------|---------|
| `&&`             | AND            | `true && false`   | `false` |
| <code>\|\|</code> | OR             | `true \|\| false`   | `true`  |
| `!`              | NOT (negation) | `!true`           | `false` |


### 🧪 Example:

```js
let age = 18;

console.log(age > 13 && age < 19);  // true (AND)
console.log(age < 13 || age > 65);  // false (OR)
console.log(!true);                 // false
console.log(!(age < 18));           // true
```

> ✅ Use these for **conditional checks** like in `if` statements.

---

## ❔ 5. **Ternary Operator**

Shortcut for `if...else`.
**Syntax:**

```js
condition ? expressionIfTrue : expressionIfFalse
```

### 🧪 Example:

```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // "Yes"
```

You can nest them too, but it’s not recommended for readability:

```js
let score = 85;
let grade = score > 90 ? "A" : score > 75 ? "B" : "C";
console.log(grade); // B
```

---

## ⚙️ 6. **Bitwise Operators** (Advanced)

Used to perform **bit-level** operations (not commonly used in most projects unless low-level work like hardware or performance optimizations).

| Operator    | Symbol | Example (5 & 3) | Binary                     |
| ----------- | ------ | --------------- | -------------------------- |
| AND         | `&`    | `5 & 3 = 1`     | `101 & 011 = 001`          |
| OR          | <code>\|\|</code>    | `5 \| 3 = 7`    | `101 \| 011 = 111`          |
| XOR         | `^`    | `5 ^ 3 = 6`     | `101 ^ 011 = 110`          |
| NOT         | `~`    | `~5 = -6`       | `~0101 = 1010` (in binary) |
| Left Shift  | `<<`   | `5 << 1 = 10`   | `101` → `1010`             |
| Right Shift | `>>`   | `5 >> 1 = 2`    | `101` → `10`               |

### 🧪 Example:

```js
console.log(5 & 3);  // 1
console.log(5 | 3);  // 7
console.log(5 ^ 3);  // 6
console.log(~5);     // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
```

> ⚠️ **Use cases**: Bitmasking, encryption, performance optimizations, game development, hardware control.

---

## ✅ Summary Table

| Category   | Operators                                      | 
| ---------- | ---------------------------------------------- | 
| Arithmetic | `+`, `-`, `*`, `/`, `%`                        | 
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`       | 
| Comparison | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` | 
| Logical    | `&&`, ` \|\|`, `!` |
| Ternary    | `condition ? trueResult : falseResult`         | 
| Bitwise    | `&`, `\| `, `^`, `~`, `<<`, `>>`              | 

---
