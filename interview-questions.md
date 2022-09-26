# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX stands for Javascript XML. It's essentially a combination of HTML and Javascript, and was created specifically for React. So, while you will use HTML tags when writing JSX, there are syntactical differences. Whenever you're trying to use raw JS in your code, it always needs to be inside of curly braces {} so that the program knows how to parse it. For an example, inline styling in raw HTML would look like this:

              - It's common to use underscores for things like class names when using raw HTML.
              - Notice that there are no curly braces here, and the style values are not in quotes.

<div class="empty_box" style="color: blue, font-size: 12px;">Example Text</div>

And JSX styling would look more like this:

              - It's more conventional to use camelCase for things like class/variable names while using JSX.
              - Notice the curly braces enclosing the style values, as well as the quotes to notate strings.
              - When using JSX, curly braces tell the browser that we want to insert Javascript inside of our HTML.

<div className="emptyBox" style{{color: "blue", fontSize: "12px"}}>Example Text</div>

Ultimately, HTML and JS are working together when you're using JSX, to allow you access to the best of both worlds while you're creating your web applications. (:

Researched answer: In addition to my previous answer, it's good to know that JSX is compiled into regular Javascript when it's run, so the browser itself only recognizes both the raw HTML and the raw Javascript. It has no context for what JSX is!

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a package manager that we use as developers to access the collaborative code of other developers, so that we can create smoother applications, faster. I've previously used yarn for jest testing, but I've also used it to compile the files necessary for React apps. When you run yarn to create a new React app, it will add a folder called node_modules which contains all of the source code that allows the application to function, as well as a public and src folder that contain various components like your index.html file and App.js.

Researched answer: In addition to my previous answer, yarn stands for "Yet Another Resource Negotiator", and was created by Facebook in 2016 for Node.js.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function in Javascript is, as the name implies, a function that has no name. One of the places you'll see them commonly used is in methods, which will work on specific data types like objects and arrays. For example, in the array method .map(), you will pass in an anonymous function that will accept up to three parameters. (array.map((value, index, origArr) => )).

Researched answer: In addition to my previous answer, it's important to note that anonymous functions CANNOT be called after their creation, as there would be no name to call it by. They can also accept multiple arguments, but can only have one expression.

4. What is the difference between state values and props in React?

Your answer: In react, state values are values that can be updated in real-time via the Virtual DOM without refreshing the full page. The format for that looks like this: - Declaring state: [value, methodToSetValue] = tellsReactToUseState(initialValue)
const [state, setState] = useState(initialValue)
They're great for storing data that we will want to update later!
Props come in handy when you have multiple components (isolated code stored on another file which will be connected and rendered on your main page) that you want to give access to that state. We do this through the use of props (short for properties), which we can then pass down to a child component like so:
<Component dataName="data"/>
That data can then be accessed from the child component, like so:
const Component = (props) => {

<div>{props.dataName}</div>
}

Researched answer: In addition to my previous answer, it's important to note that states and props are both JS objects. This means that to access data that's being stored inside of them, we need to remember to either use dot notation, or destructure that data at the top of our code to be accessed later.

5. What is the DOM?

Your answer: DOM stands for Document Object Model, and it's the visual representation of code that we can see displayed on a webpage. There is also something in React called the Virtual DOM, which is incredibly useful. That's because normally, the entire DOM needs to be refreshed to update changes that have occured on the page, but when we use the Virtual DOM inside of React we're able to use "states" that can be refreshed.

Researched answer: In addition to my previous answer, you can view the DOM almost like a tree. Each HTML element on the page will be a node, with tags like <body> and <head> acting as the parents to the elements inside of them.

6. STRETCH: Which is the difference between a div and a span?

Your answer: Both div and span elements in HTML represent empty containers that are used to store and style content, but the key difference between them is their block level. Div elements are block-level elements, and span elements are inline-block elements. This matters when it comes to styling, as everything you see displayed on a page is essentially being stored inside of a bunch of boxes. For example, you may have a block of text stored inside of a <div> element. If you were to change the background color of that <div>, the entire "block" of text would change color. However, if you wrapped one sentence inside of the paragraph in a <span> tag, you could then change the background color of just that line of text.

Researched answer: In addition to my previous answer, it's good to know that <span> does not have any semantic value. You should still generally wrap your text inside of semantic tags like <p> tags and headers so that search engines can make better sense of your page, but you can use <span> for the purpose of styling when you need an empty box to do something within your text.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is a type of programming that primarily relies on classes and objects. Examples of object-oriented programming include JS, Ruby, C++, and Python.

2. Ruby: Ruby is an object-oriented programming language that, like JS, is interpreted at runtime.

3. Implicit return: An implicit return is one that's returned without the use of a "return" keyword, usually taking place on a single line.

4. Ruby blocks: Ruby blocks are anonymous functions that we're able to pass into methods.

5. Ruby hashes: A ruby hash is a data structure similar to Objects in JS, with collections of key:value pairs.
