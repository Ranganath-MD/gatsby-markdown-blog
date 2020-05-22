---
title: "How to Handle REST API Requests in React"
date: "March 18th 2020"
category: "react"
author: "Kerron King"
image: "https://hackernoon.com/drafts/jaboj3yhk.png"
---

![image-react](https://hackernoon.com/drafts/jaboj3yhk.png)


REST APIs are commonly used in web development. They are programming interfaces that web apps use to 'talk' to each other. They are used to access features and data. 'REST' (Representational State Transfer) is a concept that defines the APIs properties. This article will focus on the use of web-based APIs to retrieve data from a database.
Axios is an npm package that allows apps to send HTTP requests to web APIs. To use Axios within your React app, use the following commands:

`npm install axios`
or
`yarn axios`

`import React from 'react';`

`import axios from 'axios';`

Axios requests were utilised within the React lifecycle method 'componentWillMount'. Although this method has since been deprecated, it is still available for use at the time of this writing. It will continue to be until the release of React 17. It isn't considered safe for use when asynchronous rendering is required. In its place, you should use the method 'componentDidMount'.
This method runs after the component has been updated to the DOM, and is a good place to register API calls. The basic structure this far is as follows:

class YourComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    // Your axios request here
  }

  render() {
    return (
    //  Your jsx goes here
    );
  }
}

Axios requests have the following basic structure:
axios({ method: 'http request method', url: 'Api url' });
As seen above, basic requests take an object as an argument. In that object, method and URL keys are specified. The HTTP request method type and the API URL are set as their respective values.

## GET Requests
With this basic pattern in mind, an Axios GET request would be as follows:
const apiUrl = 'https://your-api.com/';

axios({ method: 'get', url: `${apiUrl}` });
When API receives the request and processes the request, a response is sent. The component will need to handle the data received in some way before it can be used in the app. In this example, we defined a key in our state, named 'posts' and set it equal to an empty array. Axios requests are asynchronous. We need to handle the response by chaining 'then' on to the end of the request.

Inside the then block, we can update the component's state as follows:
axios({ method: 'get', url: `${apiUrl}` })
  .then(response => {
    this.setState({
      posts: response.data
    })
  });

(PS. if we were utilising redux for state management, we could call a dispatch function in the 'then' block. That way, we can save the response data in the redux store).

## POST Requests
In the case of a typical POST request, data is passed along with the API request. This data usually can reside either in the component's state or a redux store. Usually, the data that the user wishes to post to the database is obtained from a form. We would update the component's state with the handleChange function. Our Axios request would be made in the handleSubmit function.
When the form is submitted, a POST request is sent to the API. This can be done as follows:
class YourComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      post: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { post } = this.state;

    axios({
      method: 'post',
      url: `${apiUrl}/posts`,
      data: post
    })
  }

  render() {
    return (
    //  Your form resides here
    );
  }
}

## DELETE Requests

DELETE requests are similar to POST requests. They are made upon interaction with a button in the view. In this case, a handleClick function can be employed to make the request when a 'delete' button is clicked. This can be done as follows:
class YourComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          content: 'The first post'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { id } = e.target;
    const apiUrl = 'https://your-api.com/';

    axios({
      method: 'delete',
      url: `${apiUrl}/posts/${id}`
    })

  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <p>{post.content}</p>
            <div>
              <input
                type="button"
                id={post.id}
                value="Delete"
                onClick={this.handleClick}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Once the button is clicked, the DELETE request is sent to the api and the post is removed from the database. For this to be reflected on the front-end, another GET request has to be sent to update the component's state.
Requests with JWT
JWT (JSON Web Tokens) can be used to authenticate users in web-based applications. These tokens are usually generated by sending a POST request to a properly configured API. Once the token is generated, they are stored for use via localStorage. In such a case, the token would need to form part of the HTTP request made.
To illustrate this, we'll revisit the GET request example:
const apiUrl = 'https://your-api.com/';
const token = `Bearer ${localStorage.getItem('jwt')}`;

axios({
  method: 'get',
  url: `${apiUrl}`,
  headers: { Authorization: token }
});
The token is passed as another key in the object argument passed to the Axios call. POST and DELETE requests can be altered in a similar fashion with the token being passed in via a 'headers' key.
And there you have it. This was a very concise look at Axios requests in react front-end components.