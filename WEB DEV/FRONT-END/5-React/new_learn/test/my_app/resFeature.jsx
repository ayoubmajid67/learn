//* re-rendering : ---[]
/*  
   In React, **when a component re-renders**,
   it means the component's function is executed again (for functional components) 
   or its `render()` method is called again (for class components). 
   However, this does not mean that React will
   re-render the entire DOM tree associated with that component.
   React uses a process called **reconciliation** to decide which parts
   of the actual DOM need to be updated, which makes it efficient.
*/
//  Key Steps in the Re-render Process

// 1. Component Re-rendering:
/*
   - When a component's state, props, or context changes, React triggers a re-render
     of that component.

   - React does not automatically re-render the entire DOM tree; instead, 
     it updates the **virtual DOM** and then compares it with the previous virtual
     DOM snapshot to figure out what exactly changed.
*/
// 2. **Virtual DOM Comparison (Reconciliation)**:
/*   
   - React maintains a **virtual DOM**, which is a lightweight copy of the actual DOM.
  
   - When a component re-renders, React creates a new virtual DOM tree for that component,
     based on the updated state/props.
  
   - React then compares the new virtual DOM with the previous version using a **diffing
     algorithm** to identify what has changed.
  
   - The changes are minimal and are applied only to the specific parts of the DOM 
    that need updating, rather than re-rendering the whole component in the actual DOM.
*/
// 3. DOM Updates:
/*
   - Once React has identified the differences between the old and new
     virtual DOM (a process called **reconciliation**), it applies those
     changes to the **real DOM** efficiently.

   - This process avoids unnecessary DOM manipulations, making React fast and performant.

   - For example, if only the text content of an `<h1>` tag has changed,
     React will only update that text and not re-render the entire component's 
     DOM structure.
*/
//  Does React Always Re-render the Entire Component?
/*
    When React re-renders a component:
    - Yes, the entire component function or the `render()` method runs again.
      But this does not mean the entire component's UI in the DOM is updated.

    - No, React doesn't necessarily update all parts of the actual DOM. It only
      updates the specific parts that changed based on the virtual DOM comparison.
*/
//  Example of React's Fine-grained Re-rendering:
/*
    Imagine you have a component like this:
    - When `name` or `age` changes, the `UserProfile` component will re-render.

    - React will re-run the component function, generate a new virtual DOM tree, 
      and compare it with the previous virtual DOM.

    - If only the `name` has changed but the `age` remains the same, React will 
      only update the `<h1>` element in the actual DOM, leaving the `<p>` element untouched.
*/
function UserProfile({ name, age }) {
	console.log("UserProfile re-rendered");
	return (
		<div>
			<h1>{name}</h1>
			<p>{age} years old</p>
		</div>
	);
}

//**Optimizing Re-renders to Avoid Unnecessary DOM Updates**
/*
    Even though React minimizes updates to the actual DOM, you can further
    optimize your components to prevent unnecessary re-renders. 
    This is crucial when performance is a concern, such as with large apps 
    or complex components.
*/

//  1. React.memo():
/*
    - `React.memo()` is used for functional components to memoize the result,
    preventing a component from re-rendering if its props haven’t changed.

*/
/*
    - This way, the `UserProfile` component will only re-render if its `name` or `age`
    props change.
*/
const UserProfile = React.memo(function UserProfile({ name, age }) {
	return (
		<div>
			<h1>{name}</h1>
			<p>{age} years old</p>
		</div>
	);
});

//  2. useMemo:
/*
    - The `useMemo` hook allows you to memoize expensive calculations, preventing
    them from being recalculated  on every re-render.
*/
/*
    - This ensures that the `computeHeavyTask` function is only recalculated when 
     `input` changes, reducing unnecessary work.
*/
const expensiveCalculation = useMemo(() => {
	return computeHeavyTask(input);
}, [input]);

// #### 3. useCallback:
/*
    - The `useCallback` hook memoizes callback functions, which is useful for avoiding
    re-creating functions every time a component re-renders.
*/
const handleClick = useCallback(() => {
	console.log("Button clicked");
}, []);

// **Summary of How React Re-renders Work**:
/*
    - Re-render Trigger: React re-renders a component when its state, props,
                         or context changes.

    - Virtual DOM: React uses a virtual DOM to track changes efficiently.
    - Reconciliation: React compares the new virtual DOM with the old one 
                      to figure out what has changed.

    - Efficient DOM Updates: React only updates the specific parts of the real
                             DOM that changed, not the entire DOM tree.

    In conclusion, React **re-renders the component logic**, but it applies DOM updates
    in a highly optimized way, only updating what’s necessary. Through techniques like 
    `React.memo`, `useMemo`, and `shouldComponentUpdate`, you can further control and
    optimize this process to avoid unnecessary re-renders and improve performance.
*/

//* question : in the case when a child  component use change the react  will React
//*            re-render just the child component  not the entire parent component ?
//*answer : --
/*
    When a child component updates or triggers a state change,
    React does not automatically re-render the parent component
    unless the parent's state or props change. Here's a breakdown 
    of how React handles re-renders in this scenario:
*/
//  1. Child Component Changes State:
/*
   If a child component changes its own state:
   - Only the child component will re-render. 

   - React will not re-render the parent component unless the parent’s 
     state or props have changed as well.
*/
//  2. Child Component Receives Props from Parent:
/*
   If the child component receives props from the parent:
   - If the parent re-renders due to its own state change or other reasons, 
     React will also re-render the child component if the props passed to the 
     child have changed.

   - If the parent re-renders but the props passed to the child remain the same,
     the child component may skip the re-rendering (especially if `React.memo`
     is used to memoize the child component).
*/
//  3. Re-render Triggered by Parent:
/*
   - If the parent component changes state or re-renders for any reason,
     **it will trigger a re-render of the child component** unless optimizations like
     `React.memo` are used to prevent unnecessary re-renders.
*/
//  4. React.memo to Prevent Unnecessary Child Re-renders:
/*
   To avoid re-rendering the child component unnecessarily when the parent re-renders,
   you can use `React.memo` on the child component. `React.memo` ensures that the child
   only re-renders when its props actually change:
*/
   const ChildComponent = React.memo(({ prop1, prop2 }) => {
     console.log("Child component re-rendered");
     return <div>Child Component</div>;
   });

//* Example:
/*
    - If you click the **"Update Child State"** button, only the `ChildComponent`
    will re-render.
    
    - If you click the **"Update Parent State"** button, both the `ParentComponent`
    and `ChildComponent` will re-render because the parent re-render triggers 
    re-renders of all children, even if their props didn’t change.
*/
function ParentComponent() {
  const [parentState, setParentState] = useState("Parent State");
  const [childState, setChildState] = useState("Child State");

  return (
    <div>
      <h1>{parentState}</h1>
      <button onClick={() => setParentState("Updated Parent State")}>
        Update Parent State
      </button>
      <ChildComponent childState={childState} setChildState={setChildState} />
    </div>
  );
}

function ChildComponent({ childState, setChildState }) {
  console.log("Child component re-rendered");
  return (
    <div>
      <h2>{childState}</h2>
      <button onClick={() => setChildState("Updated Child State")}>
        Update Child State
      </button>
    </div>
  );
}

//*  Conclusion:
/*
    - When a child updates its own state, only the child re-renders.

    - When a parent re-renders, all its child components may 
    also re-render unless optimizations (like `React.memo`) prevent it.
*/

// use effect :-- [-]
/*
    `useEffect` is one of React's most powerful hooks. It allows you to perform side effects 
    in functional components. Side effects are operations like data fetching, manual
    DOM manipulation, subscribing to services, timers, etc. The `useEffect`
    hook is React's way of handling such operations in a declarative, clean way,
    while also supporting lifecycle management (like mounting, updating, and unmounting).
*/

//  Basic Syntax
useEffect(() => {
    // side effect logic (e.g., data fetching, setting up event listeners)
    return () => {
        // cleanup logic (e.g., removing event listeners)
    };
    }, [dependencies]);

// Key Concepts of `useEffect`
/*
1. **Side Effects**: These are operations that are not purely related to rendering 
the UI (like API calls, updating the document title, setting up listeners, etc.).

2. **Dependencies Array**: This controls when the effect runs. `useEffect`
    runs whenever the component renders, but you can control when it re-runs
    by specifying certain dependencies in the array. These dependencies are 
    the variables or states that the effect depends on.

   - No dependency array: If you don’t pass any array, the effect runs
     after every render (mount and every update).
   - Empty array `[]`: If you pass an empty array, the effect runs only once,
     after the initial render (componentDidMount behavior).
   - With dependencies `[dep1, dep2]`: The effect runs only when any of the values
     in the array change. It acts as a watcher for those dependencies 
     (componentDidUpdate behavior).

3. **Cleanup Function**: Sometimes, side effects need to be cleaned up 
    (e.g., removing an event listener, clearing a timer, aborting an API request).
    You return a function inside `useEffect` that will be executed when the component
    is unmounted or before the effect is re-executed (if the dependencies change).
*/

//  Example 1: Basic Use Case (Data Fetching)
/*
    - This example fetches user data when the component mounts. 
    The empty array `[]` ensures the effect runs only once.
*/
    import { useState, useEffect } from "react";

    function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Side effect: fetch data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []); // Empty array: effect runs only once after initial render

    return (
        <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    );
    }

    export default UserList;

//  Example 2: Effect with Dependencies
/* 
    - This effect updates the document's title every time `count` changes.
    The dependency array `[count]` ensures the effect only runs when `count`
    is updated.
*/
    import { useState, useEffect } from "react";

    function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;

        // Cleanup is not required here
    }, [count]); // Effect runs every time the 'count' value changes

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
    }

//  Example 3: Cleanup Effect (Event Listener)
/*
    In this example, the event listener for `mousemove` is added when
    the component mounts. The cleanup function removes the event listener 
    when the component unmounts to prevent memory leaks.
*/
    import { useState, useEffect } from "react";

    function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        // Cleanup function to remove event listener
        return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []); // Empty array: effect runs only on mount and cleanup on unmount

    return (
        <div>
        Mouse position: {position.x}, {position.y}
        </div>
    );
    }

// When Does `useEffect` Run?
/*
- On Mount: If you pass an empty array `[]`, it behaves like `componentDidMount` 
                and runs only once after the component renders for the first time.
  
- On Update: If you pass a list of dependencies `[dep1, dep2]`, the effect
                 runs again whenever any of those dependencies change, similar 
                 to `componentDidUpdate`.

- On Unmount: The cleanup function returned by `useEffect` behaves like 
              `componentWillUnmount`, executing just before the component is removed
               from the DOM or before the effect is rerun due to changes in dependencies.
*/

//  Example 4: Conditional Side Effects
/*
    You can conditionally run effects based on state or props:
*/

    function FetchDataOnToggle({ shouldFetch }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!shouldFetch) return;

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [shouldFetch]); // Effect only runs if 'shouldFetch' changes

    return (
        <div>
        {shouldFetch ? <p>Fetched data!</p> : <p>No fetch initiated.</p>}
        </div>
    );
    }

//  Common Mistakes with `useEffect`
/*
1. **Forget to pass the dependency array**: Without the array, 
    the effect will run on every render, which can cause performance issues.
  
2. **Using state setters inside effects without dependency**: 
     If you’re setting state in an effect and don't include it in the
     dependencies, it can lead to stale closures or infinite loops.

3. **Wrong dependencies**: Always ensure that any external values used inside 
    `useEffect` are listed in the dependency array. This includes props, states, 
     or any other variables. Omitting necessary dependencies may cause bugs or
     stale values to be used.
*/

// Conclusion
/*
- Mounting, Updating, and Unmounting: `useEffect` can handle all phases
                                       of the component lifecycle.

- Dependency management: React automatically handles when the effect
                         should run by observing the values in the dependency array.

- Cleanup: You can ensure proper memory management by using the 
           cleanup function.

By understanding `useEffect`, you can manage side effects efficiently
in React functional components!
*/