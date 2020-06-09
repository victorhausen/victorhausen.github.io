---
layout: post
title: "An analysis on SARS-CoV-2/COVID-19 pandemy policy propositions in Brazil Federal Deputy Chamber."
permalink: '/posts/sars-cov-2-covid-policy-propositions-brazil.html'

covid_notebook_nlp_url: https://github.com/victorhausen/covid-19_policy_making/blob/master/bin/analysis.ipynb
covid_repository_url: https://github.com/victorhausen/covid-19_policy_making

htmlwidgets: TRUE

---
Data visualization is all about putting data in a visual context like a map or a graph. It helps us to grasp knowledge more easily, as well as detect patterns, tendencies and exceptions in data clustering.

In this study I chose a Natural Language Processing Technique called Latent Semantic Indexing for clustering COVID-19 (SARS-CoV-2) related policy propositions in brazilian federal deputy chamber.


##### On Latent Semantic Indexing

Latent Semantic Indexing (LSI)  or Latent Semantic Analysis is a technique that enables us to observe relationships between terms in a <i>document</i> by assuming that terms that are similar in meaning are used in similar contexts.


<b>How does it work</b>

First you need to build a term-document matrix. It’s basically a matrix where every row represents a <i>term</i>, and every column represents a document. So let's check some definitions.

<i>document: it’s the generalized idea of word, sentence or text. It’s any piece of textural data I want to analyse. It can be a tweet, a YouTube comment, a Reddit Post, a paragraph from a book, an paper abstract, etc.</i>

<i>term: it’s every piece that builds up a document. Depending on what I’m looking for it can be every single word, every syllable, or any set of n words, always known as n-grams or any combination of those.</i>

Lets say I have two <i>documents<i>:

“Victor likes apples and bananas.”

“My dog hates apples and bananas”

“My dog is an animal, but bananas are not”.

Next I will show you how the transposed (for better fitting in the page) version of a term-document matrix of a set of documents like that would look like this:

<div>
<table>
  <tr>
    <td> </td>
    <td>victor</td>
    <td>likes</td>
    <td>apples</td>
    <td>and</td>
    <td>bananas</td>
    <td>my</td>
    <td>dog</td>
    <td>hates</td>
    <td>is</td>
    <td>an</td>
    <td>animal</td>
    <td>but</td>
    <td>are</td>
    <td>not</td>
  </tr>
  <tr>
    <td>document_0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>document_1</td>
    <td> </td>
    <td> </td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>document_2</td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td> </td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
</table>
</div>

In this exemple I only used single words as terms for simplicity sake, but in the practical example I also use 2-grams. So besides that, I'd add to the terms list “victor likes”, “likes apples”, “apples and”, “and bananas”, and so on.
The actual content of the term-document matrix depends on how you chose to measure the presence of each term. It can be done as simply as using 1 for “the document contains this term” and 0 for “the document does not contain this term”, or the frequency with which the term appears.

<b>On Tf-Idf and term-document matrix</b>

In this case I used a Term Frequency - Inverse Document Frequency weights (Tf-Idf) in the term-document matrix. Tf-Idf weights tell me how important a term is in a document (w). It basically rewards a term if it shows up a lot in a document, but penalizes it if it shows in a large number of documents. Basically, if all your documents are on animals, the world “animal” isn’t useful to understand the minutiae in a specific text. But the world “zebra” might be good to get what a specific text is about.

{% highlight python %}
_
{% endhighlight %}

<b>On Single Value Decomposition</b>

Now I have measures of how each document position in the semantic space, I can reduce the dimensionality by using an Linear Algebra technique called Singular Value Decomposition which allows me to reduce the number of rows of a sparse matrix (such as the one I get by vectorizing my documents to a tf-idf term-document matrix) losing the minimum information possible about the relation among each column. By doing that I’m able to visualize how distributed in space my documents are. In this example I choose to keep only 3 dimensions and use the color for showing clustering information.

{% highlight python %}
_
{% endhighlight %}

The next graphs show that there isn’t a pattern related to the content of the propositions and the political parties.

{% include covid_3d_partido.html %}

But it’s still possible to see how K-Means clustering can be applied to approach this problem.

{% include covid_3d_cluster.html %}

You can check <a href="{{page.covid_notebook_nlp_url}}" target="_blank"><i>this</i></a> and others implementation in my <a href="{{page.covid_repository_urll}}" target="_blank"><i>COVID-19 github repository</i></a> repository.
