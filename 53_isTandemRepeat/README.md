---
layout: home
title: 53. Is Tandem Repeat
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
----

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[52. Proper Noun Correction](../52_properNounCorrection/README.html) | [54. Is Case-Insensitive Palindrome](../54_isCaseInsensitivePalindrome/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Determine whether the given string can be obtained by one concatenation of some string to itself.

**Example**

- For <code>inputString = "tandemtandem"</code>, the output should be
  <code>isTandemRepeat(inputString) = true</code>;
- For <code>inputString = "qqq"</code>, the output should be
  <code>isTandemRepeat(inputString) = false</code>;
- For <code>inputString = "2w2ww"</code>, the output should be
  <code>isTandemRepeat(inputString) = false</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string inputString**

  _Guaranteed constraints:_<br>
  <code>2 ≤ inputString.length ≤ 20</code>.

- **[output] boolean**
  - <code>true</code> if <code>inputString</code> represents a string concatenated to itself, <code>false</code> otherwise.

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
