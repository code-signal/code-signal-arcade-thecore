---
layout: home
title: 5. Max Multiple
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[4. Seats In Theater](../4_seatsInTheater/README.html) | [6. Circle Of Numbers](../6_circleOfNumbers/README.html) 

[Alt/rust](./Alt_rust/README.md) |[Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a <code>divisor</code> and a <code>bound</code>, find the largest integer <code>N</code> such that:

* <code>N</code> is divisible by divisor.
* <code>N</code> is less than or equal to bound.
* <code>N</code> is greater than 0.

It is guaranteed that such a number exists.

**Example**

For <code>divisor = 3</code> and <code>bound = 10</code>, the output should be
<code>maxMultiple(divisor, bound) = 9</code>.

The largest integer divisible by 3 and not larger than <code>10</code> is <code>9</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer divisor**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>2 \leq divisor \leq 10</code>.

* **[input] integer bound**

    _Guaranteed constraints:_<br>
    <code type='math/tex'>5 \leq bound \leq 100</code>.

* **[output] integer**

    * The largest integer not greater than <code>bound</code> that is divisible by <code>divisor</code>.

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
------

{% highlight sql linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
