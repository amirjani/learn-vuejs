# Learning Vue

Hi, this is my first steps to learn vuejs,

## What is vie

Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

## Directives

The **v-bind** attribute you are seeing is called a directive. **Directives** are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here, it is basically saying “keep this element’s title attribute up-to-date with the message property on the Vue instance.”

**v-if**: if Statement

**v-for**: for loop

**v-on** directive to attach event listeners that invoke methods on our Vue instances

**v-model**: directive that makes two-way binding between form input and app state

## Components

The component system is another important concept in Vue, because it’s an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components. If we think about it, almost any type of application interface can be abstracted into a tree of components

## Lifecycle Hooks

![lifecyle](https://v3.vuejs.org/images/lifecycle.svg)

Each component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

```javascript
Vue.createApp({
  data() {
    return { count: 1 };
  },
  created() {
    // `this` points to the vm instance
    console.log("count is: " + this.count); // => "count is: 1"
  },
});
```

## Composition Api

Creating Vue components allows us to extract repeatable parts of the interface coupled with its functionality into reusable pieces of code. This alone can get our application pretty far in terms of maintainability and flexibility. However, our collective experience has proved that this alone might not be enough, especially when your application is getting really big – think several hundred components. When dealing with such large applications, sharing and reusing code becomes especially important.

Such fragmentation is what makes it difficult to understand and maintain a complex component. The separation of options obscures the underlying logical concerns. In addition, when working on a single logical concern, we have to constantly "jump" around option blocks for the relevant code.

It would be much nicer if we could collocate code related to the same logical concern. And this is exactly what the Composition API enables us to do.

## videos

[Complete Vue.js 3 (Inc. Composition API, Vue Router, Vuex)](https://www.udemy.com/course/complete-vuejs-3-crash-course-composition-api-vue-router-vuex)

### vs-code extensions

- vetur
- vue
- Auto Close Tag
- Auto Import
