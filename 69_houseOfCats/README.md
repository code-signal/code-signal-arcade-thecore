---
layout: home
title: 69. House Of Cats
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[68. All Longest Strings](../68_allLongestStrings/README.html) | [70. Alphabet Subsequence](../70_alphabetSubsequence/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house _sorted in ascending order_. It's guaranteed that each person has <code>2</code> legs and each cat has <code>4</code> legs.

**Example**

- For <code>legs = 6</code>, the output should be
<code>houseOfCats(legs) = [1, 3]</code>.

  There could be either <code>1</code> cat and <code>1</code> person <code>(4 + 2 = 6)</code> or <code>3</code> people <code>(2 * 3 = 6)</code>.

- For <code>legs = 2</code>, the output should be
<code>houseOfCats(legs) = [1]</code>.

  There can be only <code>1</code> person.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer legs**

  The total number of legs in the house. It's guaranteed,that this number is even.<br>

  _Guaranteed constraints:_<br>
  <code>0 ≤ legs < 50</code>.

- **[output] array.integer**
  - Every possible number of people that can be in the house.

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
