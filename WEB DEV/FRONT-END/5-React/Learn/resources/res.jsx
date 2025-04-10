// install packages Of a project :
``` 
    you should be in the same level of package.json 
    npm install; 
```
// run React App :
```
    npm [run] start 
```
//git remote branches : 
```
    git branch -a 
```

// create new react app :  (app_name) can not contain capital letters or spaces :----------[]
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
    <element className=[{]"cls1 cls2"[}] ></element>
```
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
```
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
```
//Content.js  :
```
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
```

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
```
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
```
// Content.js :
```
    import "./content.css";
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
```
// conditional Rendering :--[]

// example using ternary operator ? :
    return (
        <div className="App">
            {showChildren ? (
                <Content email="nasim@gmail.com" phone="3322">
                    <h1 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>nice to meet you</h1>
                </Content>
            ) : null}
        </div>
    );

// example using  if statement : 
    import "./App.css";
    import Content from "./content";
    function App() {
        let showChildren = true;

        return (
            <div className="App">
                <Content name="ayoub" email="ayoub@gmail.com" phone="05332" />
                <Content name="majid" email="majid@gmail.com" phone="2544" />
                <LoadChildren childrenStatus={showChildren} />
            </div>
        );
    }
    function LoadChildren({ childrenStatus = true }) {
        console.log(Boolean(false));
        if (childrenStatus) {
            return (
                <Content email="nasim@gmail.com" phone="3322">
                    <h1 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>nice to meet you</h1>
                </Content>
            );
        } else {
            return null;
        }
    }
    // export default App;

// List Rendering : Example 
    import "./App.css";
    import Content from "./content";
    function App() {
        const tasks = ["eat my breakfast", "take a shower", "do my homeworks", "Pray the Aicha", "watching a  podcast", "Go to  Sleep"];
        return (
            <div className="App">
                <ul>
                    {/* you need to add key to make react able to differentiate between lis  */}
                    {tasks.map((task,index) =>  <li key={index} >{task}</li>)}
                </ul>
            </div>
        );
    }
    // export default App;

// stat :
/*
    state in React allows components to manage and maintain their internal data, enabling
    them to be dynamic and interactive. Understanding how to effectively use state is 
    crucial for building robust and scalable React applications.
*/

// useStat hook : 
```
    import { useState } from "react";
    export default function Btn({ title }) {
        if (!title) title = "user title";
        const [name, setName] = useState(title);

        function changeName() {
            if (name == title) setName("Ayoub");
            else setName("Majid");
        }
        return (
            <div className="btnContainer">
                <button onClick={changeName}>Click Me</button>
                <h1>{name}</h1>
            </div>
        );
    }
```
    /*
        In this code, the `useState` hook plays a crucial role in managing state
        within the functional component
        `Btn`. Let's break down its role and how it triggers re-renders 
        when the state of `title` changes:
    */

    //* 1. **Initializing State**:
    ```javascript
    const [name, setName] = useState(title);
    ```
    /*
            The `useState` hook is used to declare a state variable `name` and its corresponding
            setter function `setName`. The initial value of the `name` state variable is set to 
            the value of the `title` prop passed to the component.
    */
    
    //* 2. **Rendering Initial UI**:
    ```javascript
    <h1>{name}</h1>
    ```
    /*
            The `<h1>` element in the JSX renders the current value of the `name` state variable. Initially,
            it displays the value of the `title` prop passed to the component.
    */

    //* 3. **Updating State on Button Click**:
    ```javascript
    function changeName() { 
        if (name === title) {
            setName("Ayoub");
        } else {
            setName("Majid");
        }
    }
    ```
    /*
        The `changeName` function is called when the button is clicked. It checks if 
        the current value of the `name` state variable is equal to the `title` prop. 
        If they are equal, it updates the `name` state variable to `"Ayoub"`, otherwise,
        it updates it to `"Majid"`.
    */

    //* 4. **Re-rendering on State Change**:
    /*
        When the `setName` function is called to update the state variable `name`,
        React re-renders the component. This is because React detects the change 
        in state and automatically triggers a re-render of the component to reflect
        the updated state. Consequently, the `<h1>` element displaying the value of
        the `name` state variable is re-evaluated and updated with the new value.
    */
    
    //* 5. **Re-rendered UI**:
    /*
    After the state is updated, React re-renders the component with the new value of the `name` 
    state variable. As a result, the UI is updated to display the new name ("Ayoub" or "Majid") 
    depending on the current state.
    */
    /*
        In summary, the `useState` hook manages the state of the `name` variable in the `Btn` component.
        When the state changes (due to button click), React automatically triggers a re-render of the 
        component to reflect the updated state, resulting in the UI being updated accordingly.
        This mechanism enables React to efficiently handle state changes and keep the UI in sync 
        with the underlying data.
    */

// how does react detect  the change of state : -- []
    /*
        React detects changes in state using a mechanism called reconciliation. 
        When a component's state changes, React compares the previous state with 
        the new state. It then determines which parts of the component's UI need 
        to be updated to reflect the changes in state.
    */

    //* 1. **Virtual DOM**:
    /*
        React maintains a virtual representation of the DOM (Document Object 
        Model), known as the Virtual DOM. This virtual representation mirrors 
        the actual DOM but is lightweight and exists entirely in memory.
    */

    //* 2. **Rendering**:
    /*
        When a component's state changes, React re-renders the component and 
        updates the Virtual DOM accordingly. React compares the new Virtual DOM 
        with the previous Virtual DOM to identify the differences.
    */

    //* 3. **Differential Algorithm**:
    /*
        React employs a highly optimized algorithm called the Reconciliation 
        Algorithm to perform a "diffing" process between the new Virtual DOM 
        and the previous Virtual DOM. This process involves efficiently 
        identifying the minimal set of changes needed to update the actual DOM.
    */

    //* 4. **Identifying Changes**:
    /*
        During the diffing process, React identifies which elements in the 
        Virtual DOM have changed between the previous and new states. It compares 
        elements based on their type, attributes, and content.
    */

    //* 5. **Batching Updates**:
    /*
        React batches multiple state updates into a single re-render operation 
        for performance optimization. This means that if multiple state changes 
        occur within the same event handler or lifecycle method, React combines 
        them into a single update, reducing unnecessary re-renders.
    */

    //* 6. **Updating the DOM**:
    /*
        Once React identifies the changes needed to update the actual DOM, it 
        applies these changes in a batched manner to minimize the number of DOM 
        manipulations. This process ensures that the UI is efficiently updated 
        to reflect the changes in state.
    */

    /*
        In summary, React detects changes in state by comparing the Virtual DOM 
        before and after a component's re-rendering. It uses an efficient 
        reconciliation algorithm to identify the minimal set of changes required 
        to update the actual DOM, ensuring optimal performance and UI responsiveness.
    */

// example with input : 
```
    import "./Inp.css";
    import { useState } from "react";
    export default function Inp() {
        let [content, setContent] = useState("");
        function changeName(e) {
            setContent(e.target.value);
        }
        return (
            <div className="inputContainer">
                <input placeholder="enter your name" onChange={changeName} />
                <h2>{content}</h2>
            </div>
        );
    }
```

// From submission : --[]
// Method 1 :
```
    import "./Frm.css";
    import { useState } from "react";
    export default function Frm() {
        let [name, setName] = useState("");
        let [age, setAge] = useState(0);
        age = Number(age);
        return (
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log("name :", name);
                    console.log("age :", age);
                }}
            >
                <label for="name">name:</label>
                <input
                    id="name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <label for="age">age:</label>
                <input
                    id="age"
                    type="number"
                    onChange={(event) => {
                        setAge(event.target.value);
                    }}
                />

                <button>submit</button>
            </form>
        );
    }

```
// Method 2 : 
```
    import "./Frm.css";
    import { useState } from "react";
    export default function Frm() {
        let [formInfo, setFromInfo] = useState({ name: "", age: 0 });

        function setValue(event) {          
                setFromInfo({...formInfo,[event.target.id]:event.target.value});
        }
        return (
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log(formInfo);
                }}
            >
                <label >name:</label>
                <input id="name" onChange={setValue} />
                <label >age:</label>
                <input id="age" type="number" onChange={setValue} />

                <button>submit</button>
            </form>
        );
    }
```
// advance Example  Form Stat:
```
    import "./Frm.css";
    import { useState } from "react";

    export default function Frm() {
        const [formInfo, setFormInfo] = useState({ name: "", age: 0, generalInfo: "", isStudent: false, userCountry: "MR", gender: "" });

        function handleChange(event) {
            const { id, type, value, checked } = event.target;
            setFormInfo((prevState) => ({
                ...prevState,
                [id]: type === "checkbox" ? checked : value,
            }));
        }

        return (
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log(formInfo);
                }}
            >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={handleChange} />

                <label htmlFor="age">Age:</label>
                <input id="age" type="number" onChange={handleChange} />

                <label htmlFor="generalInfo">General Info:</label>
                <textarea id="generalInfo" onChange={handleChange} />

                <div className="checkedBoxes">
                    <input type="checkbox" id="isStudent" onChange={handleChange} />
                    <label htmlFor="isStudent">Is Student</label>
                </div>

                <select id="userCountry" onChange={handleChange}>
                    <option>MR</option>
                    <option>KSA</option>
                    <option>UAI</option>
                    <option>US</option>
                </select>

                <label>Gender:</label>

                <div>
                    <label>Male</label>
                    <input type="radio" id="gender" name="gender" value="Male" onChange={handleChange} checked={formInfo.gender === "Male"} />
                </div>

                <div>
                    <label>Female</label>
                    <input type="radio" name="Female" id="gender" value="Female" onChange={handleChange} checked={formInfo.gender === "Female"} />
                </div>

                <button type="submit">Submit</button>
            </form>
        );
    }

```

// Array Stat Example : 
    import "./App.css";
    import { useState } from "react";

    function App() {
        //  const devices=["Iphone","Mac","Samsung","Windows"];

        let [devices, setDevices] = useState([]);
        let [deviceInput, setDeviceInput] = useState("");

        const devicesList = devices.map((device, index) => {
            return (
                <div key={index} style={{ display: "flex", gap: "20px", width: "60%", minWidth: "250px", alignItems: "center", border: "1px solid black", justifyContent: "space-between", padding: "7px 10px", borderRadius: "10px" }}>
                    <li>{device}</li>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button
                            onClick={() => {
                                deleteDevice(index);
                            }}
                        >
                            Delete
                        </button>

                        <button
                            onClick={() => {
                                updateDevice(index);
                            }}
                        >
                            update
                        </button>
                    </div>
                </div>
            );
        });

        function deleteDevice(deviceIndex) {
            let newDeviceList = [...devices];
            newDeviceList.splice(deviceIndex, 1);
            setDevices(newDeviceList);
        }
        function updateDevice(deviceIndex) {
            let newDevices = [...devices];

            newDevices[deviceIndex] = prompt("enter the new Name : ", newDevices[deviceIndex]);

            if (newDevices[deviceIndex]) setDevices(newDevices);
        }
        function changeStat(event) {
            setDeviceInput(event.target.value);
        }

        function addDevice() {
            setDevices((prevState) => [...prevState, deviceInput]);
            setDeviceInput("");
        }

        return (
            <div className="App">
                <div className="addDeviceContainer" style={{ margin: "30px" }}>
                    <input placeholder="add new device" style={{ marginRight: "6px" }} onChange={changeStat} value={deviceInput} />
                    <button onClick={addDevice}>Add</button>
                </div>

                <ul style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>{devicesList}</ul>
            </div>
        );
    }

//  updating states several Times :--[]
    function App() {
        let [count, setCount] = useState(0);
    
        function increaseCounter() {
            setCount(count + 1);
            setCount(count+ 1);
        }
        
    
        return (
            <div className="App">
                <h1 >The count is : <span onClick={increaseCounter}  >{count}</span> </h1>
            </div>
        );
    }
/*
        The reason the counter doesn't increment by 2 each time you click is because 
         the `setCount` function in React's `useState` hook doesn't immediately update 
         the state. Instead, it schedules  an update, and React 
        may batch multiple `setState` calls together for performance reasons.

        In your `increaseCounter` function, you're calling `setCount` 
        twice with the same value of `count`. Both calls essentially set the same
        value. React sees these two calls and batches them together
        into a single update, resulting in only one increment by 1.
    
        If you want to increase the count by 2 each time you click,
        you should use the functional update form of `setCount`, which 
        takes the current state as an argument and returns the
        new state. This ensures that the state updates are applied
        one after the other:
*/  
        ```javascript
        function increaseCounter() {
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
        }
        ```
/*        
        With this change, the count will indeed increase by 2 
        each time you click. Each call to  `setCount` is now using
        the previous state to calculate the new state, so you're  effectively
        incrementing by 1 twice.
*/
/*
    In JavaScript, code execution generally follows a single-threaded event loop model.
    This means that JavaScript code is executed in a sequence, and only one operation 
    can be processed at a time. However, React's reconciliation process and state updates
    are asynchronous operations, meaning they don't happen immediately when you call
    `setState` or `useState` setter functions.

    When you call `setState` or `useState` setters in React, React schedules the state
    updates for processing. React then decides when to apply these updates based on
    its internal mechanism, which aims to optimize performance by batching updates 
    and minimizing unnecessary re-renders.

    While you can't precisely determine whether two state updates will be batched 
    together or not in a given scenario, you can rely on React's behavior that it
    will batch updates when possible to improve performance.

    Here's a simplified explanation of how React typically handles state updates:

    1. When you call `setState` or `useState` setter functions, React records the
    state update requests.
    2. React batches multiple state updates that occur within the same event loop iteration.
    3. Before the next repaint, React reconciles the state updates and performs 
    a single re-render of the component.

    In your specific case, calling `setCount` twice within the same event loop iteration
    is likely to result in React batching these updates together,
    leading to a single re-render of the component with the combined state update.
    However, React's exact behavior may vary depending on factors such as the React version,
        the environment (development vs. production), and the complexity of your component tree.

    While you cannot directly observe the batching behavior of React's state updates
    , you can rely on React's efficient handling of state updates to optimize performance
    in your application.
*/

// Prop Drilling : is pass a stat   From parents to a hierarchal  children 

// useContext : 
/*
    useContext is a React Hook that allows functional components to consume values from the Context API. 
    Context provides a way to pass data through the component tree without having to pass props down 
    manually at every level.
*/

// How useContext Works:
/*
    Create a Context: First, you need to create a context using the React.createContext() 
    function. This creates a new context object.

    Provide the Context: You then provide the context to the component tree using a Context.Provider 
    component. This component wraps the part of the tree where you want to make the context available.

    Consume the Context: Finally, you consume the context value in any descendant component using
    the useContext hook. This hook takes the context object as an argument and returns 
    its current value.
*/

// steps : 
/*
    1- define the provider  :
    2- define the consumer  :
    3- value to pass :
 */

    // Main Features of useContext:
 /*   
    Simplicity: useContext provides a simple way to consume context values in 
    functional components without the need for render props or higher-order components.
    
    Avoids Prop Drilling: It helps in avoiding prop drilling by allowing components
     to access context values directly, no matter how deeply nested they are in the component tree.
    
    Dynamic Context Updates: Components consuming context with useContext will
     re-render whenever the context value changes.
    
    Performance Optimization: React optimizes the context value retrieval with useContext,
     ensuring that components only re-render when necessary based on changes to the context value.
    
    Multiple Contexts: You can consume multiple contexts within a single component by 
    calling useContext multiple times with different context objects.
    
    Static Type Checking: useContext can be easily used with static type checking libraries
     like TypeScript for type-safe context consumption.
    
    In summary, useContext is a powerful tool in React for managing state and sharing data 
    across components in a more concise and efficient way compared to traditional prop drilling methods.
*/
//  Example : ------
// --------- App.js ------------- :
```
    import "./App.css";
    import Form from "./LoanForm/LoanForm";

    import { UserContext } from "./contexts/UserContext";
    import { useState } from "react";

    export default function App() {
        let defaultUser = {
            username: "",
            password: "",
        };
        let [user, setUser] = useState(defaultUser);

        window.onload = function () {
            let username = prompt("Enter Your userName : ");
            let password = prompt("Enter Your password : ");

            setUser({ username: username, password: password });
        };

        return (
            <div className="App">
                <UserContext.Provider value={user}>
                    <Form />
                </UserContext.Provider>
            </div>
        );
    }
```
// --------- LoanForm.js ------------- :
```
    import "./LoanForm.css";
    import { useState } from "react";
    import Alter from "../Alter/Alter";
    import Input from "../Input/Input";
    import { LoanInputsContext } from "../contexts/LoanFormInputsContext";

    export default function Form() {
        let initialFormInfo = {
            name: "",
            phone: "",
            age: "",
            salary: "Less Than 500$",
            isEmployee: false,
            isSubmitted: false,
        };
        let initialErrors = {
            isValidPhone: true,
            isValidAge: true,
        };

        let [formInfo, setFormInfo] = useState(initialFormInfo);
        let [errors, setErrors] = useState(initialErrors);
        document.addEventListener("click", (event) => {
            if (formInfo.isSubmitted && !event.target.classList.contains("alterDivText")) {
                setFormInfo((prevState) => ({
                    ...prevState,
                    isSubmitted: false,
                }));
            }
        });

        function changeFormInfo(event) {
            const { id, type, value, checked } = event.target;
            setFormInfo((prevState) => ({
                ...prevState,
                [id]: type === "checkbox" ? checked : value,
            }));
        }
        function handelFormSubmission(event) {
            event.preventDefault();
            setFormInfo((prevState) => ({
                ...prevState,
                isSubmitted: true,
            }));

            const isValidPhone = formInfo.phone.length >= 10 && formInfo.phone.length <= 12;
            const isValidAge = formInfo.age >= 18 && formInfo.age <= 100;

            setErrors({
                isValidPhone,
                isValidAge,
            });
        }

        function GeneraleAlterMsg() {
            return formInfo.isSubmitted && <>{errors.isValidAge && errors.isValidPhone ? 
                <Alter msg="The Form Has Been submitted Successfully" /> : !errors.isValidPhone ?
                 <Alter msg="Phone Number Format is incorrect" msgColor="red" /> 
                 : <Alter msg="Age is Not allowed" msgColor="red" />}</>;
        }

        return (
            <>
                <form onSubmit={handelFormSubmission}>
                    <div className="header">
                        <h2>Requesting a Loan</h2>
                        <hr />
                    </div>

                    <div className="nameContainer inputContainer">
                        <LoanInputsContext.Provider value={{ value: formInfo.name, id: "name", 
                        handelChange: changeFormInfo, placeholder: "Enter Your Name" }}>
                            <Input />
                        </LoanInputsContext.Provider>
                    </div>
                    <div className="phoneContainer inputContainer">
                        <LoanInputsContext.Provider value={{ value: formInfo.phone, id: "phone", 
                        handelChange: changeFormInfo, placeholder: "Enter Your Phone " }}>
                            <Input />
                        </LoanInputsContext.Provider>
                    </div>

                    <div className="ageContainer inputContainer">
                        <LoanInputsContext.Provider value={{ type: "number", value: formInfo.age, id: "age", 
                        handelChange: changeFormInfo, placeholder: "Enter Your Age " }}>
                            <Input />
                        </LoanInputsContext.Provider>
                    </div>

                    <input type="submit" />
                </form>

                {GeneraleAlterMsg()}
            </>
        );
    }
```
// --------- Input.js ------------- :
```
    import "./Input.css";

    import { useContext } from "react";

    import { LoanInputsContext } from "../contexts/LoanFormInputsContext";
    import { UserContext } from "../contexts/UserContext";

    export default function Input() {
        const inputContext = useContext(LoanInputsContext);
        const userContextInfo = useContext(UserContext);

        return (
            <div className="inputContent">
                <h1>The User {userContextInfo.username}</h1>
                <h2>This is the header of the Component</h2>
                <input type={inputContext.type} placeholder={inputContext.placeholder} 
                id={inputContext.id} value={inputContext.value} onChange={inputContext.handelChange}
                 required={inputContext.IsRequired} />
            </div>
        );
    }
```
// --------- Alter.js ------------- :
```
    import "./Alter.css";
    import { useContext } from "react";
    import { UserContext } from "../contexts/UserContext";

    export default function Alter({ msg = "Message To Show", msgColor = "green", children }) {
    let userData = useContext(UserContext);
    return (
        <div className="alterDiv">
        <h2 style={{ color: msgColor }} className="alterDivText">
            {msg}
            {msgColor === "green" && (
            <h3>Welcome Mes {userData.username}</h3>
            )}
        </h2>
        {children}
        </div>
    );
    }
```

// Example 2 : 
// --------- App.js ------------- :
```
    import { useState } from 'react';
    import { places } from './data.js';
    import { getImageUrl } from './utils.js';
    import {imgSizeContext,placeContext} from "./Context.js"

    export default function App() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <>
        <label>
            <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
                setIsLarge(e.target.checked);
            }}
            />
            Use large images
        </label>
        <hr />
        <imgSizeContext.Provider value={imageSize}>
        <List />
        </imgSizeContext.Provider>
        
        </>
    )
    }

        function List() {  
        const listItems = 
            places.map(place =>
            <li key={place.id}>
            <placeContext.Provider value={place}>
            <Place />
            </placeContext.Provider>
            </li>
        );
        return (
            <ul>{listItems}</ul>
                );
        
        }

        import { useContext } from "react";
        function Place() {
        let place=useContext(placeContext)
        return (
            <>
            <PlaceImage
            />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
            </>
        );
        }

        function PlaceImage() {
        let imgSize=useContext(imgSizeContext);
            let place=useContext(placeContext)
        return (
            <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imgSize}
            height={imgSize}
            />
        );
        }
```
// --------- context.js ------------- :
import { createContext } from "react";
export let imgSizeContext=createContext(0); 
export let  placeContext=createContext({})

// --------- data.js ------------- :
export const places = [{
    id: 0,
    name: 'Bo-Kaap in Cape Town, South Africa',
    description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
    imageId: 'K9HVAGH'
  }, {
    id: 1, 
    name: 'Rainbow Village in Taichung, Taiwan',
    description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
    imageId: '9EAYZrt'
  }, {
    id: 2, 
    name: 'Macromural de Pachuca, Mexico',
    description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
    imageId: 'DgXHVwu'
  }, {
    id: 3, 
    name: 'Selarón Staircase in Rio de Janeiro, Brazil',
    description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
    imageId: 'aeO3rpI'
  }, {
    id: 4, 
    name: 'Burano, Italy',
    description: 'The houses are painted following a specific color system dating back to 16th century.',
    imageId: 'kxsph5C'
  }, {
    id: 5, 
    name: 'Chefchaouen, Marocco',
    description: 'There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.',
    imageId: 'rTqKo46'
  }, {
    id: 6,
    name: 'Gamcheon Culture Village in Busan, South Korea',
    description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
    imageId: 'ZfQOOzf'
  }];
  
// --------- utils.js ------------- :
export function getImageUrl(place) {
    return (
      'https://i.imgur.com/' +
      place.imageId +
      'l.jpg'
    );
  }

// React Router :  --- []

// install the react router dom library :
``` 
    npm install react-router-dom --save 
```
// in the index.js :
```
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import {BrowserRouter} from "react-router-dom"

    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(
    <React.StrictMode>

        <BrowserRouter>
        <App />
        </BrowserRouter>
    
    </React.StrictMode>
    );
```
// App.js : create new route Example : 
```
    import "./App.css";
    import { Route, Routes } from "react-router-dom";
    function App() {
        return (
            <>
                <div className="App">
                    <Routes>
                        <Route path="/Home" element={<h1>Hello From Home</h1>} />
                        <Route path="/" element={<h1>Hello From Home</h1>} />
                    </Routes>
                </div>
            </>
        );
    }
    export default App;
```

// create a link Example :
```
    import "./navBar.css";
    import { Link } from "react-router-dom";

    export default function NabBar() {
        return (
            <nav>
                <h1>
                    <span>M</span>ajid
                </h1>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
```

//  Dynamic routing :
```
<Route path="/pageName/:dynamicEndPoint"  element={<ServiceDetails/>} ></Route>
```

// group routes  :
```
    <Route path="/services" >
        <Route path=":serviceId" element={<ServiceDetails />} />
        <Route index element={<services/>}>
        <Route path="new" element={<NewService />} />
        <Route path="delete" element={<DeleteService />} />
    </Route>
```
// add layout to a  routes group 
// ----App.js :----
```
<Route path="/services" element={<ServiceLayout />}>
        <Route index element={<services/>}>
        <Route path="new" element={<NewService />} />
        <Route path="delete" element={<DeleteService />} />
    </Route>
```
// ----ServicesLayout.js:----
    import { Outlet } from "react-router-dom";
    export default function ServiceLayout() {
        return (
            <div>
                <h1 style={{ width: "100vw", background: "red", color: "white" }}>Services</h1>

                <Outlet />
            </div>
        );
    }


// add error page : 
```
    <Route path="*" element={<ErrorPage />} />
```

// download the material ui library : 
```
    npm install @mui/material @emotion/react @emotion/styled --save 
```
// create a theme example :
    import React, { useState } from "react";
    import "./App.css";
    import Comp from "./material/Material"; // Assuming Comp is a custom component
    import { createTheme, ThemeProvider } from "@mui/material/styles";
    import { purple } from "@mui/material/colors";

    const theme = createTheme({
    palette: {
        primary: {
        main: "#000",
        },
        secondary: {
        main: purple[500],
        },
    },
    });

    function App() {

    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <div className="main">
            <Comp />
            <hr />
            </div>


        </div>
        </ThemeProvider>
    );
    }
    // export default App;
// install material icons :
```
    npm install @mui/icons-material  --save
```
// Example : 
    import "./App.css";
    import Button from '@mui/material/Button';
    import DeleteIcon from '@mui/icons-material/Delete';
    import SendIcon from '@mui/icons-material/Send';
    import Stack from '@mui/material/Stack';
    import { createTheme, ThemeProvider } from "@mui/material/styles";
    import { purple } from '@mui/material/colors';
     theme = createTheme({
        palette: {
            primary: {
            main: "#000",
            },
            secondary: {
            main: purple[500],
            },
        },
        });
    function App() {
        return (
            <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={2} >
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
        </Stack>
        </ThemeProvider >
        );
    }

    // export default App;
