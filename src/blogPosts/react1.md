---
    title: "Understanding the Fundamentals of State in React"
    date: "Jun 11, 2018 "
    category: "react"
    author: "Edmond Atto"
    image: "https://miro.medium.com/max/1400/0*97cKXImM3xRLoAER"
---

#### This chapter's main focus is on state, its management and components that utilise it in React.


What is State?
==============

State is a JavaScript object that stores a component's dynamic data and determines the component's behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

State can only be used within a class component. If you anticipate that a component will need to manage state, it should be created as a class component and not a functional one.

State is similar to `props` but unlike `props`, it is private to a component and is controlled solely by the said component. In the examples from previous chapters, the behaviour of components has primarily depended on the `props` that are passed down to them. In those cases, the components that receive the props have no control over them because props are read-only.

In Project One from [Chapter 2](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb), `toys` were passed as `props` to the `Application` component, and then down to the `Toys` component. For the `Toys` component to gain control over the `toys` data, it should first be converted into a class component and the `toys` data should be added into `state`.

It is worth mentioning that state in React is immutable, that is to say, state should never be altered/changed directly but rather, changes should be made to a copy of the current version of the state. This has benefits such as providing the ability to review the state at different points in time and for apps to hot reload (automatic reloading of the page in the browser when you make changes in the code).

* * * * *

Adding State to a Class Component
=================================

`class Greeting extends React.Component {
  render(){
    return <h1>I'm a component in need of some state!</h1>;
  }
}`


Notice that the constructor accepts `props` as an argument, which are then passed to `super()`. Adding `super()` is a must when using the constructor.

Passing `props` is not necessary unless you are making use of them in the component. From the `Greeting` component above, it's not necessary to pass `props` to either the `constructor` or `super()`, that is to say, the component can be written like so:

class Greeting extends React.Component { constructor() {\
    super();\
    *// Define your state object here*\
  }\
  *// Define your render method here*\
}

However, the React docs recommend that you always pass `props` in order to guarantee compatibility with potential future features

State is accessed using `this.state` as seen in the `Greeting` component's `h`1 tag.

> State is initiated using `this.state`, however, all subsequent changes to state are made using `this.setState`. Using `this.setState` ensures that the components affected by the change in state are re-rendered in the browser.

* * * * *

Investigating State using React Developer tools
===============================================

One way to accelerate your understanding of React is to make use of the React devtools created by the team at Facebook. The power of React devtools is most apparent when you need to debug your React app by doing a deep dive into the code. The tools enable you to investigate how React is working below the surface when the app is rendered in the browser.

Installing the React Developer tools
------------------------------------

The devtools are available for download on both [Mozilla Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) and the [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). Follow the appropriate link to install the devtools depending on which browser you have installed on your computer.

Throughout the rest of this book, Chrome will be used as the browser of choice. In order to confirm successful installation of the devtools on Chrome, open the developer tools window using `Cmd+Opt+I` on a Mac or `Ctrl+Alt+I` on a windows PC. You should now see a React tab.

Using the React Devtools
------------------------

With the `Greeting` component from earlier in this chapter rendered in your browser, open the developer tools and navigate to the React tab. You should see something similar to this

![](https://miro.medium.com/max/60/0*fULzoEN9AtH3lXSk.?q=20)

![](https://miro.medium.com/max/2000/0*fULzoEN9AtH3lXSk.)

Mastery of the React DevTools will enable you to gain a better understanding of React's inner workings and to quickly debug React applications.

* * * * *

Project Three
=============

To better understand the basic use cases of state in React, we shall build a simple application that allows us to create and render records.

What we'll build
----------------

A React app that enables us to keep track of our friends' `names` and `ages`. The app provides a form that we shall use to enter their details. It then renders our friends' details in beautiful Bootstrap 4 cards.

The finished application looks like this:

![](https://miro.medium.com/max/60/0*jPcUi0wVv7oERJ9K.?q=20)

![](https://miro.medium.com/max/1620/0*jPcUi0wVv7oERJ9K.)

Getting started
---------------

Download or clone the projects' starter files from the [repository](https://github.com/vumbula/vumbula-react) to your computer so that you can follow along.

In order to run the code examples in this chapter on your machine, you have to first install a server globally using NodeJS. Below is the command to install the `http-server` on your machine. Open your terminal and run:-

npm install http-server -g

After the installation is done, `cd` into the Chapter 3 folder then the starter-code folder. Within there run the command below to start the server:-

http-server .

> In case you make changes to the code and they are not shown in the browser even after a refresh, try [hard refreshing](https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/#.WxzTnDMzbRY) that tab or page.

Below is what will be shown in the browser when you open the localhost url displayed in your terminal.

![](https://miro.medium.com/max/60/0*V38N1Qlkl5xnlQTF.?q=20)

![](https://miro.medium.com/max/1548/0*V38N1Qlkl5xnlQTF.)

Inside `src/index.js`, there's a simple class component that renders JSX for a form with `name` and `age` fields, and a `save` button.

Adding state to the component
-----------------------------

In order to display the `names` and `ages` added to the application, we need to add state to our `Application` component. We'll start by adding default state which contains a dummy name and age which will display whenever the page is rendered in the browser.

We do this by initiating state with `this.state` inside the component's `constructor` method like so:

constructor(props) {\
  super(props);\
  this.state = {\
    data: [\
      {\
        name: 'John',\
        age: 20\
      }\
    ]\
  }\
}

If you are following along, copy and paste the snippet into the `Application` component just before the render function.

* * * * *

Rendering data from state
=========================

To render the state data, a `Card` presentation component is defined with the functionality to display the `name` and `age` from the `props` passed to it as shown below.

const Card = props =>\
  <div className="col-md-6 col-lg-3">\
    <div className="card mb-3">\
      <div className="card-body"> <p className="card-title">\
          <span>Name: </span>{props.info.name}\
        </p> <p className="card-text">\
          <span>Age: </span>{props.info.age}\
        </p> </div>\
   </div>\
 </div>;

Add this `Card` component to the `index.js` file below the `Application` component but before the `ReactDOM` code.

To display the data in state, we need to access the data array using `this.state.data` and then use JavaScript's `map` function to loop through the array so that each of its elements is rendered on the page.

<div className="row">\
  {\
    this.state.data.map(info => <Card info={info}/>)\
  }\
</div>

The statement containing the `Card` component is wrapped within a Bootstrap row so that it is displayed within the Bootstrap grid and placed just after the second `<hr/>` within the class component's `render` function.

A card is then displayed in the browser as shown below.

![](https://miro.medium.com/max/60/0*7_jptoUGMIQlR1W-.?q=20)

![](https://miro.medium.com/max/1620/0*7_jptoUGMIQlR1W-.)

Checking the console within the developer tools window reveals errors as shown in the screenshot below.

![](https://miro.medium.com/max/60/0*kxy5Oh95QKQzN3WT.?q=20)

![](https://miro.medium.com/max/1788/0*kxy5Oh95QKQzN3WT.)

This means that we need to give each `Card` element a `key` so that React can identify each `Card` and know what to do when changes occur to any one of them. This can easily be fixed using the `map` function.

The `map` function accepts a function that accepts two arguments, the array element (`info`) and its `index`; this means that we can use the `index` as a `key` to the `Card` component.

Alter the code to match the code within the snippet below.

<div className="row">\
  {\
    this.state.data.map(\
      (info, index) => <Card key={index} info={info}/>\
    )\
  }\
</div>

This should clear the error in the console.

> Using `index` as a `key` in a `map` function typically works well for small applications whose data is not that dynamic. However, as applications and data sources get larger, using the `index` as a `key` becomes unreliable. In these cases, it's recommended to use a truly unique `key`, for example an `id`. In the project above, every object in state can be assigned an `id` field and this `id` can then be used as the `key` like so; `key={info.id}`.

* * * * *