---
layout: home
title: 44. Is Sum Of Consecutive 2 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[Back --> ](../README.md)

Find the number of ways to express `n` as sum of some (at least two) consecutive positive integers.

**Example**

- For `n = 9`, the output should be
`isSumOfConsecutive2(n) = 2`.

  There are two ways to represent `n = 9: 2 + 3 + 4 = 9` and `4 + 5 = 9`.
- For `n = 8`, the output should be
`isSumOfConsecutive2(n) = 0`.

  There are no ways to represent `n = 8`.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

   A positive integer.<br>

  _Guaranteed constraints:_<br>
   `1 ≤ n ≤ 10<sup>4</sup>`.

- **[output] integer**

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
