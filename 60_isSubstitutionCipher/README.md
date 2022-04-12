---
layout: home
title: 60. Is Substitution Cipher?
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[59. Strings Construction](../59_stringsConstruction/README.html) | [61. Create Anagram](../61_createAnagram/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

A _ciphertext alphabet_ is obtained from the **plaintext alphabet** (the plaintext alphabet is a string "abcdef...xyz") by means of rearranging some characters. For example <code>"bacdef...xyz"</code> will be a simple ciphertext alphabet where <code>a</code> and <code>b</code> are rearranged.

A _substitution cipher_ is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some _ciphertext alphabet_.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) _substitution ciphers_.

**Example**

- For <code>string1 = "aacb"</code> and <code>string2 = "aabc"</code>, the output should be
  <code>isSubstitutionCipher(string1, string2) = true</code>.

  Any _ciphertext alphabet_ that starts with <code>acb...</code> would make this transformation possible.

- For <code>string1 = "aa"</code> and <code>string2 = "bc"</code>, the output should be
  <code>isSubstitutionCipher(string1, string2) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string1**

  A string consisting of lowercase English characters.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ string1.length ≤ 10</code>.

- **[input] string string2**

  A string consisting of lowercase English characters of the same length as <code>string1</code>.<br>

  _Guaranteed constraints:_<br>
  <code>string2.length = string1.length</code>.

- **[output] boolean**

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
