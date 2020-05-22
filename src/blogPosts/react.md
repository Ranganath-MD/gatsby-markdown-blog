---
    title: "Beginners Guide to ReactJS"
    date: "20-05-2020"
    category: "react"
    author: "Ranganath"
    image: "https://miro.medium.com/max/1400/0*97cKXImM3xRLoAER"
---
![react-image](https://miro.medium.com/max/1400/0*97cKXImM3xRLoAER)
# Pre-requisites:

There are a few things you should know before you start playing around with React.

1. HTML and CSS.
2. JavaScript and programming concepts.
3. Document Object Model — DOM. (Optional, as DOM is covered in this course)
4. Familiarity with ES6 syntax and features.
5. Node.js and npm installed globally on your machine.


## Why ReactJS?

## Problem:

In traditional web application programming, for even a small change in the webpage, the whole page is reloaded. This makes the web pages slower than they should be.

## How ReactJS solves this problem:
    React only updates what’s necessary.

# What is React?

1. React or ReactJS is a JavaScript library.
2. React is not a framework. (unlike Angular, which is more opinionated).
3. React is an open-source project created by Facebook.
4. React is used to build user interfaces (UI) on the front end.
5. React is the view layer of an MVC application (Model View Controller).

`React allows developers to create/compose large web applications with complex UIs from small and isolated pieces of code called “components” which can change data, without reloading the page.`

## Other ReactJS Features?

* ### JSX: Javascript + XML
It is a XML syntax extension to JavaScript. JSX is simple JavaScript which allows HTML quoting and uses these HTML tag syntax to render subcomponents. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children.

* ### Single-Way data flow
Otherwise called Unidirectional. In React, a set of immutable values are passed to the renderer of each component as properties in its HTML tags. The component cannot directly modify any properties but can pass a callback function with the help of which we can do modifications. This complete process is known as “properties flow down; actions flow up”.

* ### Virtual DOM (Document Object Model)
The Document Object Model (DOM) is a cross-platform and language-independent API that treats an HTML, XHTML, or XML document as a tree structure. The DOM model represents a document with a logical tree.

