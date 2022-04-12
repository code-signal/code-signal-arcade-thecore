---
layout: home
title: 52. Proper Noun Correction
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
----

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[51. Enclose In Brackets](../51_encloseInBrackets/README.html) | [53. Is Tandem Repeat](../53_isTandemRepeat/README.html) 

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

_Proper nouns_ always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

**Example**

- For <code>noun = "pARiS"</code>, the output should be
  <code>properNounCorrection(noun) = "Paris"</code>;
- For <code>noun = "John"</code>, the output should be
  <code>properNounCorrection(noun) = "John"</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string noun**

  A string representing a proper noun with a mix of capital and small English letters.<br>

  _Guaranteed constraints:_<br>
  <code>1 ≤ noun.length ≤ 10</code>.

- **[output] string**
  - Corrected (if needed) noun.

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
