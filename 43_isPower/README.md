---
layout: home
title: 43. Is Power
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[The Core - Home](../code-signal-arcade-thecore/README.html)

[42. Make Array Consecutive 2](../42_makeArrayConsecutive2/README.html) | [44. Is Sum Of Consecutive 2](../44_isSumOfConsecutive2/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Determine if the given number is a power of some non-negative integer.

**Example**

- For <code>n = 125</code>, the output should be
<code>isPower(n) = true</code>;
- For <code>n = 72</code>, the output should be
<code>isPower(n) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

   A positive integer.<br>

  _Guaranteed constraints:_<br>
   <code>1 ≤ n ≤ 400</code>.

- **[output] boolean**

   - <code>true</code> if <code>n</code> can be represented in the form <code>a<sup>b</sup></code> (<code>a</code> to the power of <code>b</code>) where <code>a</code> and <code>b</code> are some non-negative integers and <code>b ≥ 2</code>, false otherwise.

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
console.log("This prints to the console when you Run Tests");
return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution

---

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
