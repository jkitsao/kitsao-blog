---
title: Why Tailwindcss is an awesome css library
description: we take a look at Tailwindcss A utility-first CSS framework, and why you should start using it.
date: 2020-12-10T11:00:00.000Z
author: Jackson kitsao
image: https://jefrydco.id/_nuxt/img/106442b-1080.jpg
---

![Why Tailwindcss is an awesome library](https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

About 5 months ago i was working on a side project with **react/nextjs**
i was familiar with bootstrap so i decided to use it a my main css library, but as the project grew i found myself having to
dig into the bootstrap files to customize some small details, i also had a separate css file with lots of **!important** statements to override the default bootstrap styling.
I decided i needed a better library one that was easy to customize and implement thats when i found out about tailwindcss
and decided to give it a try ....*spoiler Alert: that was one of my best decisions*

## What is Tailwindcss ?

According to the official documentation, Tailwind CSS is a A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
.In other words Tailwind gives you a bunch of classes that you can easily use to style  your document without the need of a css file.
Tailwind's utility classes help you work within the constraints of a system instead of littering your stylesheets with specific restrained values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.

## What are utility classes as used in Tailwindcss ?

Utility classes are CSS class names that serve one particular purpose,. Typically a class like .bg-blue would give you background-color: blue, for example. It’s not uncommon to use utility classes within CSS, but on the whole they tend to be used sparingly – at least with well-established methodologies such as [Blocks, Elements and Modifiers](http://getbem.com/introduction/) and [ITCSS](https://itcss.io/).
Here is a nice article on utility classes ["what are utility classes"](https://css-irl.info/a-year-of-utility-classes/)
But basically a utility-first CSS framework is packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to easily build and maintain any design, directly in your document markup.

Lets look at an example :

### **suppose you wanted to  control how flex and grid items are positioned along a container's main axis.**

In css this would be achieved by using the Justify content property

### **#Start**

In Tailwindcss we would add the  **justify-start** property to the parent element to position items against the start of the container's main axis:

```Html
<div class="flex justify-start ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

```

### **#Center**

In Tailwindcss we would add the  **justify-center** property  to parent element to position items to the center of the container's main axis:

```Html
<div class="flex justify-center ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

```

### **#End**

In Tailwindcss we would add the **justify-end** property to the parent element to position items against the end of the container's main axis:

```Html
<div class="flex justify-end ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

```

## Summary of why you should start using Tailwindcss ?

Unlike previous css Frameworks/libraries that gave you CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components which in turn made it hard to customize and thus  required lots of style overrides or rewriting files that can thus lead to a lot of time spent on designing and coding the website if the design tends to deviate from the customary design used in the framework or library.

Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.
maintaining a utility-first CSS project turns out to be a lot easier than maintaining a large CSS codebase, simply because HTML is so much easier to maintain than CSS.

Tailwind also automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10KB of CSS to the client hence increased perfomance.

### #MOBILE-FIRST

Mobile-first design is a design philosophy that aims to create better experiences for users by starting the design process from the smallest of screens: mobile. Designing and prototyping your websites for mobile devices first helps you ensure that your users' experience is seamless on any device

By default, Tailwind uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

```html
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes, while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.

Wrestling with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.

Throw a screen size in front of literally any utility class and watch it magically apply at a specific breakpoint.

Tailwind's breakpoints only include a min-width and don't include a max-width, which means any utilities you add at a smaller breakpoint will also be applied at larger breakpoints.

If you'd like to apply a utility at one breakpoint only, the solution is to undo that utility at larger sizes by adding another utility that counteracts it.

Here is an example where the background color is red at the md breakpoint, but teal at every other breakpoint:

```html
<div class="bg-teal-500 md:bg-red-500 lg:bg-teal-500">
  <!-- ... -->
</div>
```

Notice that we did not have to specify a background color for the sm breakpoint or the xl breakpoint — you only need to specify when a utility should start taking effect, not when it should stop.

### *Customizing breakpoints*

You can completely customize your breakpoints in your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
```

[Learn more here ->](https://tailwindcss.com/docs/responsive-design)

### #COMPONENT-DRIVEN ARCHITECTURE

Tailwind encourages a utility-first workflow, where designs are initially implemented using only utility classes to avoid premature abstraction.

If you're repeating the same utilities over and over and over again, all you have to do is extract them into a component or template partial and boom — you've got a single source of truth so you can make changes in one place.

For small components like buttons and form elements, creating a template partial or JavaScript component can often feel too heavy compared to a simple CSS class.

In these situations, you can use Tailwind's @apply directive to easily extract common utility patterns to CSS component classes.

Here's what a btn-indigo class might look like using @apply to compose it from existing utilities:

```html
<button class="btn-indigo">
  Click me
</button>

<style>
  .btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
  }
</style>
```

To avoid unintended specificity issues, Tailwind recommends wrapping your custom component styles with the @layer components { ... } directive to tell Tailwind what layer those styles belong to:

```js
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

Tailwind will automatically move those styles to the same place as @tailwind components, so you don't have to worry about getting the order right in your source files.

To avoid unintended specificity issues, we recommend wrapping your custom component styles with the @layer components { ... } directive to tell Tailwind what layer those styles belong to:

[Learn more ->](https://tailwindcss.com/docs/extracting-components)

### #DARK MODE SUPPORT

Now with Dark Mode.

"Dark Mode is a supplemental mode that can be used to display mostly dark surfaces on the UI. The design reduces the light emitted by device screens while maintaining the minimum color contrast ratios required for readability. The advantages of Dark Mode are, it enhances visual ergonomics by reducing eye strain, facilitating screens to adjust according to current light conditions and providing comfort of use at night or in dark environments." [what is Dark mode ?](https://www.techaheadcorp.com/blog/dark-mode/)

Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Throw dark: in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients out-of-the-box — no configuration required.
To make this as easy as possible, Tailwind includes a dark variant that lets you style your site differently when dark mode is enabled:

```html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
  <p class="text-gray-600 dark:text-gray-300">
    Lorem ipsum...
  </p>
</div>
```

Dark mode is not enabled by default. To enable it, set the darkMode option in your tailwind.config.js file to media:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'media',
  // ...
}
```

[Learn more  ->](https://tailwindcss.com/docs/dark-mode)

### #Eazy CUSTOMIZATION

Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.

By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
Tailwind includes an expertly crafted set of defaults out-of-the-box, but literally everything can be customized — from the color palette to the spacing scale to the box shadows to the mouse cursor.

Use the tailwind.config.js file to craft your own design system, then let Tailwind transform it into your own custom CSS framework.

```js
// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
```

[Learn more ->](https://tailwindcss.com/docs/configuration)

## Conclusion

Working with Tailwindcss has been a really good expirience i think the team at Tailwind labs is doing a really good job and overall its an awesome library you should try it  [Tailwindcss](https://tailwindcss.com/)
