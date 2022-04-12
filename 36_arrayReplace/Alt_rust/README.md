---
layout: home
title: 36. Array Replace - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[Back --> ](../README.md)

Given an array of integers, replace all the occurrences of <code>elemToReplace</code> with <code>substitutionElem</code>.

**Example**

For <code>inputArray = [1, 2, 1]</code>, <code>elemToReplace = 1</code>, and <code>substitutionElem = 3</code>, the output should be
<code>arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer inputArray**

  A positive integer.

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq inputArray.length \leq 10^4</code>,<br>
  <code type='math/tex'>0 \leq inputArray[i] \leq 10^9</code>.

- **[input] integer elemToReplace**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq elemToReplace \leq 10^9</code>.

- **[input] integer substitutionElem**

  _Guaranteed constraints:_<br>
  <code type='math/tex'>0 \leq substitutionElem \leq 10^9</code>.

- **[output] array.integer**

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
