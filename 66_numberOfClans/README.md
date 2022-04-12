---
layout: home
title: 66. Number Of Clans
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[65. Most Frequent Digit Sum](../65_mostFrequentDigitSum/README.html) | [67. House Numbers Sum](../67_houseNumbersSum/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Let's call two integers <code>A</code> and <code>B</code> _friends_ if each integer from the array <code>divisors</code> is either a divisor of both <code>A</code> and <code>B</code> or neither <code>A</code> nor <code>B</code>. If two integers are _friends_, they are said to be in the same _clan_. How many clans are the integers from <code>1</code> to <code>k</code>, inclusive, broken into?

**Example**

For <code>divisors = [2, 3]</code> and <code>k = 6</code>, the output should be
<code>numberOfClans(divisors, k) = 4</code>.

The numbers <code>1</code> and <code>5</code> are friends and form a clan, <code>2</code> and <code>4</code> are friends and form a clan, and <code>3</code> and <code>6</code> do not have friends and each is a clan by itself. So the numbers <code>1</code> through <code>6</code> are broken into <code>4</code> clans.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer divisors**

  A non-empty array of positive integers.<br>

  _Guaranteed constraints:_<br>
  <code>2 ≤ divisors.length < 10</code>,<br> <code>1 ≤ divisors[i] ≤ 10</code>.

- **[input] integer k**

  A positive integer.<br>

  _Guaranteed constraints:_<br>
  <code>5 ≤ k ≤ 10</code>.

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
