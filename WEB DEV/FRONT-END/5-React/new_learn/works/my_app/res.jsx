// start a react app : --[]
```
npm run start
```
// install all libraries from the package.json file : 
```
npm install 
```
// {for managing course content } : --[]

//  clone the main branch 
```
git clone https://github.com/Yarob50/Tarmeez-React-Course.git
```
// git all branches list : 
```
git branch -a 
```

// create new react app :  (app_name) can not contain capital letters :----------[]
```
    npx create-react-app app_name; 
```

// app.js : it's represented the root component : 


// File Structure :----------[]
/*
    1. **index.html**:
    - This file is the entry point of your React application.
    - It contains the HTML structure of your web page.
    - Usually includes a `<div>` element with an id where React will render the application.

    2. **index.js**:
    - This file is the entry point of your React application where you bootstrap your React application.
    - It typically imports necessary dependencies and renders the root component of your application 
        into the DOM.

    3. **App.js**:
    - This file defines the root component of your React application.
    - It's where you structure your application layout and manage the overall state and behavior.

    4. **Component files (e.g., Header.js, Footer.js, etc.)**:
    - These files contain individual components of your application.
    - Each component typically represents a reusable UI element or a logical part of your application.
    - They encapsulate HTML structure, styles, and behavior related to that specific UI element.

    5. **Stylesheets (e.g., styles.css, App.css)**:
    - These files contain stylesheets for your components.
    - They provide CSS rules for styling your components and ensuring a consistent look and feel
        across the application.

    6. **Other utility files (e.g., utils.js, constants.js)**:
    - These files contain utility functions, constants, or configurations used throughout your application.
    - They help keep your code organized and facilitate code reuse.

    7. **Package.json**:
    - This file contains metadata about your project and its dependencies.
    - It lists all the dependencies required for your project to run, along with their versions.
    - It also includes scripts for running various tasks such as starting the development server 
        or building the production bundle.

    8. **Node_modules**:
    - This directory contains all the dependencies installed for your project.
    - It's managed by npm (Node Package Manager) and typically not version-controlled.

    9. **Webpack.config.js / Babel.config.js**:
    - These files contain configurations for bundling and transpiling your React code.
    - Webpack is a module bundler that bundles your JavaScript files and their dependencies into a single file for
        the browser.
    - Babel is a JavaScript compiler that transforms your modern JavaScript code (ES6/ES7) into a backward-compatible 
    version for older browsers.

    10. **.gitignore**:
        - This file specifies intentionally untracked files that Git should ignore.
        - It usually includes directories like `node_modules` and files like `.DS_Store` that you don't want
        to include in version control.

    11 ** .public**:
        - static content 

    This structure provides a foundation for organizing a React application, allowing for scalability, maintainability, 
    and reusability of code. It separates concerns by breaking down the 
    application into smaller, manageable components and provides a clear separation of HTML, CSS, and JavaScript logic.
*/


// App.js Main Structure  :----------[]
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
Sure, let's break down the code `App.js`:----------[]

1. **Imports**:
- `import React from 'react';`: Imports the React library, which is required for building React components.
- `import ReactDOM from 'react-dom/client';`: Imports the `ReactDOM` module from the `react-dom` package. 
It's used for rendering React components into the DOM.
- `import './index.css';`: Imports a CSS file for styling. This is typically used to apply global
  styles to the application.
- `import App from './App';`: Imports the `App` component from the file `App.js`. This is the main
  component of the application.
- `import reportWebVitals from './reportWebVitals';`: Imports a function called
  `reportWebVitals` from a file named `reportWebVitals.js`.

2. **Root Element**:
- `const root = ReactDOM.createRoot(document.getElementById('root'));`: Creates a root element
  using `ReactDOM.createRoot()`. This method is used to create a root for the new concurrent 
   React mode.
- `root.render()`: Renders the `App` component into the root element.

3. **Strict Mode**:
- `<React.StrictMode>`: Wraps the `App` component with `React.StrictMode`. This is a development
  mode that helps identify potential problems in your code. It enables additional checks and warnings
    for potential issues.
- `</React.StrictMode>`: Closes the `React.StrictMode` component.

4. **Performance Measurement**:
- `reportWebVitals()`: Calls the `reportWebVitals` function. This function can be used to measure various 
 performance metrics in the application, such as rendering performance, network performance, etc. You can pass
  a callback function to log the results or send them to an analytics endpoint.

*/
const reportWebVitals = onPerfEntry => {
if (onPerfEntry && onPerfEntry instanceof Function) {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  });
}
};

export default reportWebVitals;

// ReportWebVitals.js Explain code : ----------[]

/*

1. **Function Definition**:
- `const reportWebVitals = onPerfEntry => {`: Defines a constant named `reportWebVitals` which is a
    function that takes a parameter `onPerfEntry`. This parameter is expected to be a callback function
    that will be invoked with performance data.

2. **Conditional Check**:
- `if (onPerfEntry && onPerfEntry instanceof Function) {`: Checks if `onPerfEntry` is provided and if 
    it's a function. This ensures that the function is callable and has been provided before proceeding.

3. **Dynamic Import**:
- `import('web-vitals').then(...`: Dynamically imports the `web-vitals` module using the `import()` 
    function. This is a dynamic import syntax introduced in ES6. It allows importing modules on demand.
- `({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { ... }`: Destructures the imported module to
    extract specific functions `getCLS`, `getFID`, `getFCP`, `getLCP`, and `getTTFB`.

4. **Performance Metric Collection**:
- `getCLS(onPerfEntry);`, `getFID(onPerfEntry);`, `getFCP(onPerfEntry);`, `getLCP(onPerfEntry);`,
    `getTTFB(onPerfEntry);`: Calls each of the imported functions (`getCLS`, `getFID`, etc.) with 
    `onPerfEntry` as an argument. These functions are responsible for collecting specific 
    performance metrics like Cumulative Layout Shift (CLS), First Input Delay (FID), etc.

5. **Export**:
- `export default reportWebVitals;`: Exports the `reportWebVitals` function as the default export 
    of this module. This allows other parts of the codebase to import and use this function.

Overall, this code dynamically imports the `web-vitals` module, retrieves specific
 performance metric functions from it,
and invokes them with the provided callback function (`onPerfEntry`). 
It provides a generic way to collect and report 
web performance metrics in a React application.
*/

// React linking index.html with index.js :----------[]
/*
When you run a React application using tools like Create React App,
a development server is launched that handles linking the JavaScript files with the `index.html` file automatically. 

During development:

1. **Development Server**: 
- When you run `npm start` or `yarn start`, Create React App starts a development server.
- This development server serves your React application and provides hot reloading, 
allowing you to see changes in real-time as you develop.
- The development server takes care of linking the JavaScript files (typically named
    something like `main.js` or `bundle.js`) with the `index.html` file.

2. **Automatic Injection**: 
- As you make changes to your React components and save your files, Create React App 
automatically rebuilds your application and updates the browser.
- The development server injects the updated JavaScript code into the `index.html` 
file, so you don't need to manually refresh the page to see your changes.

During production:

1. **Build Process**:
- When you build your React application for production using `npm run build` or `yarn build`, 
Create React App generates optimized production-ready files.
- This includes a bundled JavaScript file containing your React components and logic.

2. **Injection Mechanism**:
- Create React App uses a build script to inject the bundled JavaScript file into the `index.html` file.
- It replaces a placeholder comment in the `index.html` file with a `<script>` tag linking to the bundled JavaScript file.
- This ensures that when you open the `index.html` file in a browser or deploy it to a server, the necessary
    JavaScript code is linked and executed properly.

In both development and production, Create React App takes care of linking the JavaScript files with the `index.html` 
file, making it easier for you to focus on building your React components and features without worrying 
 about the underlying setup and configuration.
*/
// hot Reload : ----------[]
/*
Auto reload (not refresh) the page when you save you work  be caution
 that logs errors wouldn't disappear from the console til you refresh the page 
*/
// create new component  : ----------[]
/*
    1- new js file  
    2- write a function that return the component structure 
    3- export the function as default 
    4- import the js module(new js fie )  in the target file (App.js)
*/
  // example :
    // content.js : 
    ```
        export default function MyFirstComponent() {
            return (
                <div className="content">
                    <h1>hello world</h1>
                    <h2>ayoub majid</h2>
                </div>
            );
        }
    ```
    // App.js File : 
        import Content from  './content'

// use a component  : ----------[]
    ```
        <compName></compName>
    ```
    //or : self-closing element 
    ```
        <compName/>
    ```
// use js into xml structure : ----------[]
```
    {jsCode}
```
  // example 1 : 
    ```
        export default function content() {
            const title="hello World"; 
            return (
                <div className="content">
                    <h1>{title}</h1>
                    <h2>ayoub majid</h2>
                </div>
            );
        }
    ```
  //example 2 : 
    ```
        export default function content() {
            return (
                <div className="content">
                    <h1>{contentObj.title}</h1>
                    <h2>{contentObj.userFullName}</h2>
                </div>
            );
        }
        let  contentObj= {
        title:"Hello world", 
        userFullName :"Ayoub Majd"
        }; 
        ```

// add attribute : ----------[]
    // add event : 
    ```
        <element onEvent={functionName} ></element>
    ```
    //example : 
    ```
        function btnClick(){
            console.log("You Clicked At me ")
        }
        <button onClick={btnClick} >Click Here</button>

    ```
    // add styling : 
    /*
        you have to set the styling in camelCase format : (ex : backgroundColor)
    */
    ```
        <element style={{styling}} ></element>
    ```

    // example : 
    ```
        const elemStyling={ 
            backgroundColor:"green",
            fontWeight:""
        }
        <header className="App-header" style={elemStyling}>
    ```
// add class  to an element : 
```
    <element className="cls1 cls2" ></element>
```
//add class to an element  using a variable : 
```
<element className={variableName} ></element>
```
//add class to an element using variables and string ( Template Literals) :
 ```
<element className={` className ${variableName}`} ></element>

-- or  :
<element className={ 'className' + variableName} ></element>

```
// example : 
    import "./myButton.css";

    export default function MyButton() {
        const { title, githubLink, class: buttonClass } = ManageByButton.myButtonInfo;

        return (
            <div className={`content ${buttonClass}`}>
                <h1>{title}</h1>
                <a href={githubLink}>my github account</a>
            </div>
        );
    }

    class ManageByButton {
        static myButtonInfo = {
            title: "Hello world",
            githubLink: "https://github.com",
            class: "contentButton",
        };

        static getCurrentDate() {
            return new Date().toString(); 
        }
    }

    const title = "Hello world";


    const myButtonInfo = {
        title: title,
        githubLink: "https://github.com",
        class :"contentButton"
    };



// add styling using a css file : ----------[]
/*
    1- create new css file : 
    2- add  styling 
    3- import css file in the component.js file: import "./FileName.css"
*/
  // example : 
        // content.css 
        ```
            .content {

                padding: 20px;
                margin-bottom: 10px 0;

            }
            .content button {
                padding: 10px 20px;
                font-size: 1em;
                border-radius: 12px;
                border: none;
                background-color: aqua;
            }
        ```
        // content.js 
        ```
            import "./content.css";

            export default function content() {
                return (
                    <div className="content">
                        <h1>Hello world</h1>
                        <button onClick={btnClick}>Click Here</button>
                    </div>
                );
            }
        ```

// Scoped Styling (CSS Modules or Inline Styles)
/*
    CSS Modules: When using CSS Modules, the styles are scoped to the component. This means that the
    class names are locally scoped, and there is no risk of them affecting other parts of the 
    application.
    
    Inline Styles: Applying styles directly to elements using the style attribute ensures
    that those styles are specific to that element only.
*/
// example : 
    // MyButton.module.css
    .button {
        background-color: blue;
        color: white;
    }
    
    // MyButton.jsx
    import styles from './MyButton.module.css';
    
    export default function MyButton() {
        return <button className={styles.button}>Click Me</button>;
    }
    

// next challenge : 18. Components Challenge

//  project structure : 
/*
/your-app-name
│
├── public
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── (any other static assets like icons, images, etc.)
│
├── src
│   ├── assets
│   │   ├── images
│   │   ├── styles
│   │   └── (any other static assets like fonts, etc.)
│   │
│   ├── components
│   │   ├── (ComponentName)
│   │   │   ├── (ComponentName).jsx
│   │   │   ├── (ComponentName).css
│   │   │   └── (ComponentName).test.js
│   │   └── (more components...)
│   │
│   ├── hooks
│   │   └── useCustomHook.js
│   │
│   ├── pages
│   │   ├── Home
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   └── Home.test.js
│   │   └── (more pages...)
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── utils
│   │   └── helpers.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── (other config files like .eslintrc, .prettierrc, etc.)


*/
// props : --[]
/*
parameters that you pass when you create or call a component 
*/
// in App.js :
```
    <ComponentName paremeter1="value" paremeter2="value" paremeterN="value" />
```
// in ComponentName.js
```
    export default function({paremeter1,paremeter2,paremeterN}){
    return(
        // code 

    );
    }
```

// example :  
// App.js :

    import "./App.css";
    import Content from "./content";
    function App() {
        return (
            <div className="App">
                <Content name="ayoub" email="ayoub@gmail.com" phone="05332"></Content>
                <Content email="nasim@gmail.com" phone="3322"></Content>
                <Content name="majid" email="majid@gmail.com" phone="2544"></Content>
            </div>
        );
    }
    export default App;

//Content.js  :

    import './content.css'
    export default function ({name,email,phone}) {
        return (
                <div className='content'>
                    <h1>{name}</h1>
                    <h3>{email}</h3>
                    <h4>{phone}</h4>
                </div>
        );
    }


// set default props Values : 
    ComponentName.defaultProps = {
        prop1: "Default prop1",
        prop2: "default prop2",
    };

    // or: 
    export default function ComponentName({prop1="default prop1",prop2="default prop2"}){

        
    }

// example : 
    import "./Article .css";
    export default function Article({ name, email, birthDate }) {
        console.log(name, email, birthDate);

        return (
            <article className="articleComponentClass">
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{birthDate}</h2>
            </article>
        );
    }
    Article.defaultProps = {
        name: "Default Name",
        email: "default@example.com",
        birthDate: "01-01-1970",
    };

// add xml content : 
// in App.js :
```
    <ComponentName paremeter1="value" paremeter2="value" paremeterN="value" >
       // xml content 
    </ComponentName>
```
// in ComponentName.js :  the children key contain value the xml content passed to the componentName 
```
    export default function({paremeter1,paremeter2,paremeterN,children}){
    return(
        // code 
        {children}

    );
    }
```

// example : 
// App.js : 

    import "./App.css";
    import Content from "./content";
    function App() {
        return (
            <div className="App">
                <Content name="ayoub" email="ayoub@gmail.com" phone="05332" />

                <Content email="nasim@gmail.com" phone="3322" >
                    <h1 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>nice to meet you</h1>
                </Content>
                <Content name="majid" email="majid@gmail.com" phone="2544"></Content>
            </div>
        );
    }
    export default App;

// Content.js :

    import "./content.css";
    import { Component } from 'react';
export default function ({ name = "no name", email = "no email", phone = "no phone", children }) {
        return (
            <div className="content">
                <h1>{name}</h1>
                <h3>{email}</h3>
                <h4>{phone}</h4>
                {children}
            </div>
        );
    }


// convert from string to jsx : 
```
    export default function ComponentName(){
    return (
        <div dangerouslySetInnerHTML={{ __html:content }} />
    );
    }
```
/*
dangerouslySetInnerHTML: This is used to render the HTML content inside the children. Be careful with this
 approach to avoid injecting any untrusted content, as it can lead to security issues.
*/
// example : 
    import React from "react";
    import Button from "./Button";

    export default function Tags() {

 
    const tagText ="javaScript"
    const  children= "<i class='fab fa-js'></i><img src='path/to/javascript.png' alt='JavaScript' />",
 

    return (
        <div className="tags">
            <Button text={tagText}>
            <div dangerouslySetInnerHTML={{ __html:children }} />
            </Button>
   
         
      

        </div>
    );
    }

