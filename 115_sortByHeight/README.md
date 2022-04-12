---
layout: home
title: 115. Sort By Height
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description

---

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[114. Shuffled Array](../114_shuffledArray/README.html) | [116. Sort By Length](../116_sortByLength/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

**Example**

For <code>a = [-1, 150, 190, 170, -1, -1, 160, 180]</code>, the output should be
<code>sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]</code>.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] array.integer a**

  If <code>a[i] = -1</code>, then the <code>i<sup>th</sup></code> position is occupied by a tree. Otherwise <code>a[i]</code> is the height of a person standing in the <code>i<sup>th</sup></code> position.

  _Guaranteed constraints:_<br>
  <code>1 ≤ a.length ≤ 1000</code>,<br>
  <code>-1 ≤ a[i] ≤ 1000</code>.

* **[output] array.integer**
  - Sorted array <code>a</code> with all the trees untouched.

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
