---
layout: home
title: 59. Strings Construction
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[58. Is Unstable Pair](../58_isUnstablePair/README.html) | [60. Is Substitution Cipher](../60_isSubstitutionCipher/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given two strings <code>a</code> and <code>b</code>, both consisting only of lowercase English letters, your task is to calculate how many strings equal to <code>a</code> can be constructed using only letters from the string <code>b</code>? Each letter can be used only once and in one string only.

**Example**

- For <code>a = "abc"</code> and <code>b = "abccba"</code>, the output should be <code>stringsConstruction(a, b) = 2</code>.

  We can construct <code>2</code> strings <code>a = "abc"</code> using only letters from the string <code>b</code>.

- For <code>a = "ab"</code> and <code>b = "abcbcb"</code>, the output should be <code>stringsConstruction(a, b) = 1</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string a**

  String to construct, containing only lowercase English letters.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ a.length ≤ 10<sup>5</sup></code>.

- **[input] string b**

  String containing needed letters, containing only lowercase English letters.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ b.length ≤ 10<sup>5</sup></code>.

- **[output] integer**
  - The number of strings <code>a</code> that can be constructed from the string <code>b</code>.

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
