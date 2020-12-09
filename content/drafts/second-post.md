---
title: Second post
description: ailwind is very descriptive. Each class we add is a specific style. This may seem daunting and messy at first, but it makes making custom interfaces extremely easy. Need a different hover
date: 2020-06-17T11:00:00.000Z
image: https://bit.ly/2NzgrCE
---
As you can see, Tailwind is very descriptive. Each class we add is a specific style. This may seem daunting and messy at first, but it makes making custom interfaces extremely easy. Need a different hover color? Prefix the color style with hover:. Need rounded corners? Add rounded. Feel free to customize the classes and refer to the detailed docs for more options.

Now let’s make our form more useful.

Create a function inside our Home component that will be called when the Submit button is clicked. Let’s add an alert so we can test our function.

Set the onClick attribute on the button to invoke the subscribe function.

All we pass the useState Hook is our initial state value, which will be an empty string, since we want an empty text field to start with. useState returns a pair of values which we destructure into two separate variables – the state value (in this case input), and the function to update the value (in this case setInput). This is what makes Hooks so easy — anytime we want to access the state, we use the variable. Likewise, anytime we want to update the state, we use the function, just as we would use setState in a React class component.

To capture the value in our text field, let’s add two attributes to the element. The first is value, which stores the entered text, and the second is onChange, which will be triggered every time the value changes. Together, these attributes will keep the text field in sync with the state.
