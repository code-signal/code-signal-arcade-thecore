---
layout: home
title: 51. Enclose In Brackets
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
----

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[50. Crossword Formation](../50_crosswordFormation/README.html) | [52. Proper Noun Correction](../52_properNounCorrection/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a string, enclose it in round brackets.

**Example**

For <code>inputString = "abacaba"</code>, the output should be
<code>encloseInBrackets(inputString) = "(abacaba)"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string inputString**

  _Guaranteed constraints:_<br>
  <code>0 ≤ inputString.length ≤ 10</code>.

- **[output] string**

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
