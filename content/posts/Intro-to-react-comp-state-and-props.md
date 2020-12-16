---
title: Introduction to Reactjs ...components, state and props
description: we take a look at the building blocks of react. Components,JSX, state and props
date: 2020-12-16T11:00:00.000Z
author: Jackson kitsao
image: https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
---

![desert](https://images.unsplash.com/photo-1607753724987-7277196eac5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)

<!-- This Article will help anyone  who look ahead to deal with ReactJS for the
first time. We will try to introduce every concept by showing simple code examples that
can be easily understood. After finishing all the chapters, you will feel confident working
with ReactJS. As a bonus we will introduce additional elements that work well with ReactJS
to help you learn the best practices and follow the modern JavaScript trends. -->

## What is React

React is a front-end library developed by Facebook. It is used for handling the view layer
for web and mobile apps. ReactJS allows us to create reusable UI components. It is
currently one of the most popular JavaScript libraries and has a strong foundation and
large community behind it.

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.



## Components in React

Component based UI is nothing but seperating the UI into smaller re-usable modules.

Example, if you have textboxes, dropdowns, checkboxes…etc in your page. We can write seperate components for these along with those functions. So that same component can be used in every other pages where we want that to appear.

This saves time. Helps in faster development.

* It encourages reusability.
* It is consistent because we are using the same component in every pages.
  
All the major javascript frameworks like Angular.js, Ember.js, React.js etc…are based on components.

In the world of React, there are two ways of writing a component. **Class based components** and **functional components**

<!-- here we will give an example -->
## class based components

 A React component class takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

 The render method returns a description of what you want to see on the screen. React takes the description and displays the result. In particular, render returns a React element, which is a lightweight description of what to render. Most React developers use a special syntax called “JSX” which makes these structures easier to write

 Below is an example of a todo component

```js
 class Todolist extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>My todos</h1>
        <ul>
          <li>Clean the back yard</li>
          <li>Walk my dog</li>
          <li>Buy groceries</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <Todolist />

```

### What is jsx

JSX is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
JSX produces React “elements”.

Example :

```js
const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));
```

### Why use JSX with Reactjs?

* It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.
* Instead of separating technologies by putting markup and logic in separate files, React uses components that contain both.
* It is type-safe, and most of the errors can be found at compilation time.
* It makes easier to create templates.

## Functional based components

As the name suggests a functional component is a function that returns JSX, we will look at what JSX means 
unlike the class based counterpart functional components directly return JSX and dont require the 
render method

```js
const Todolist = () => {
 return <h1>Hello, world</h1>;
};

// Example usage: <Todolist />

```

<!-- As a dveloper you get to choose First of all, the clear difference is the syntax. Just like in their names, a functional component is just a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React.Component which has a render method.  -->

## State in React

<!-- the particular condition that someone or something is in at a specific time.
data controlled and used by a component -->
State in reactjs  allows components to create and manage their own data.

### state in a Class based components

```js
class Test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}

```

## How do you update a class based component’s state?

State should not be modified directly, but it can be modified with a special method called setState( ).

```js
//arrow function
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
//with a normal function
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});

```

## Using the State Hook in functional component

A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. There are many other hooks [introduction to react hooks](https://reactjs.org/docs/hooks-intro.html)



```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, useState is a Hook . We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
The state starts as { count: 0 }, and we increment state.count when the user clicks a button by calling this.setState().

## Props in React

React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object. We will learn about these in details in this article.
props can best be defined as a way of passing data from component to component, basically from parent to child component.

Passing and Accessing props

We can pass props to any component as we declare attributes for any HTML tag. Have a look at the below code snippet:

## Accessing Props in a Class based component

```js
import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// sample component to illustrate props 
class MyComponent extends React.Component{ 
    render(){ 
        return( 
  
                <div> 
                    {/*accessing information from props */} 
                    <h2>Hello {this.props.user}</h2> 
                    <h3>Welcome to Tipjarr</h3> 
                </div> 
            ); 
    } 
} 
  
ReactDOM.render( 
    // passing props 
    <MyComponent user = "Jackson Kitsao" />,  
    document.getElementById("root") 
); 
```

## Accessing props in a Functional Based components

```js
import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// functional component to illustrate props 
function Component(props){ 
    return( 
        <div> 
            {/*accessing information from props */} 
            <h2>Hello {props.user}</h2> 
            <h3>Welcome to Tipjarr</h3> 
         </div> 
    ); 
} 
  
ReactDOM.render( 
    // passing props 
    <Component user = "Jackson Kitsao" />,  
    document.getElementById("root") 
); 
```

In the above code snippet, we are passing a prop named sampleProp to the component named DemoComponent. This prop has a value “HelloProp”. Let us now see how can we access these props.
We can access any props inside from the component’s class to which the props is passed. The props can be accessed as shown below:

## State and Props

Props are read-only. We are not allowed to modify the content of a prop. Whatever the type of Component is – functional or class-based, none of them is allowed to modify their props. We will learn about this in details in next article.

The following example shows how to combine state and props in your app. We are setting the state in our parent component and passing it down the component tree using props. Inside the render function, we are setting headerProp and contentProp used in child components.

```js
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props..."
      }
   }
   render() {
      return (
         <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
export default App;
```

In the above example, we have used a class-based component to illustrate props. But we can pass props to a function-based component also just like we did in the above example. But to access a prop from a function we do not need to use the ‘this’ keyword anymore. Functional components accept props as parameters and can be accessed directly. Below is the same example as above but this time using a function-based component instead of class-based component.

```js
import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// functional component to illustrate props 
function MyComponent(props){ 
    return( 
        <div> 
           
            <h2>Hello {props.user}</h2> 
            <h3>Welcome to Tipjarr</h3> 
         </div> 
    ); 
} 
  
ReactDOM.render( 
    // passing props 
    <MyComponent user = "Jackson Kitsao" />,  
    document.getElementById("root") 
); 
```

The output of this program will be same as that of the above program. The only difference is that we have used a function-based component instead of class-based component.

## Conclusion

 <!-- Although they do similar things, Props and State are used differently. When building an app, most of your components will probably be stateless. Props pass data from parent to child components. They are immutable and thus will not be changed. State **handles data that will change. This is particularly useful for private data such as user input. A good case study is a registration form where the user will type in data and state helps update what they see. -->
 <!-- ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn.  -->
 Choosing the best front-end technology nowadays is a big deal. Today's web development era has witnessed quite a few technologies in the market, each designed to meet different needs.ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn.
