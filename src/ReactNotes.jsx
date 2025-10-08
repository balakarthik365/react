//React helps us to create an application by breaking down the application into the components
//Later arrange them to in a way to communicate with each components and make an interactive application
//React works with the Virtual DOM to improve the performance.
//React gives the best way  to perform the best state management.
//DOM - Document Object Model -> have the structured document with tags. when a change in element happens DOM will get refreshed.
//Now, React creats a lite weight virtual DOM.which is the replica of actual DOM. Now changes are made in Virtual DOM then compute the differences and then applies the changes to the actual DOM
//reconciliation - check the VDOM and DOM then changes are compred and then the VDOM adds to DOM.
// 1. Break the UI into components,
// 2. Manage states very effectively,
// 3. Use Props for component communication
// 4. Handles all the changes in VDOM (React fiber architecture)

//JSX - JavaScript XML with a syntactic sugar which looks like HTML

//React Architecture
//1. index.html is the file that loads on dom
//2. Main.jsx will be imported in the index.html
//3. App.jsx is the page where we code the React app

//component in React is a function.
//React components are created with Capital letter first so that it can check the diff between html and components and understand what is what
//Whenever we want to pass the data from component to component we pass it as object {}.
//These data which is passed is called props from parent and will be received in the child.
// why className than class in React?
// We already have a class keyword in Js. just to avoid confusion we use the className.
// why key to any loop in React - this is beacuse the react can track and update each component in virtual DOM so that reconciliation is done without any disturbances

//Hooks in React
//Hooks are special functions in React.
//useState() - helps to udpate the state of the component. it has a variable and function to update it. let [data, setData] = useState(0);
//useEffect()

//Props drilling - to pass props component to component to component
//ContextApi -

// Notes: React useEffect Hook and Component Lifecycle
// The useEffect Hook
// Purpose: Manages the lifecycle of React components when they are defined using functions (Functional Components).

// Replacement for Classes: Replaced the lifecycle methods previously used when components were defined using the class syntax (Class Components).

// React Component Lifecycle
// The React component lifecycle describes the stages a component goes through from its creation to its removal. It has three main phases:

// Mount 🚀
// Action: The component is being created and initially rendered (put onto the screen/DOM).
// Corresponding useEffect behavior: Running the effect function for the first time.

// Update 🔄
// Action: The component is being updated (re-rendered) due to changes in stat e or props.
// Corresponding useEffect behavior: Running the effect function whenever its specified dependencies change.

// Unmount 🗑️
// Action: The component is being deleted or removed from the DOM.
// Corresponding useEffect behavior: Running the cleanup function (returned from the effect) right before the component is destroyed.

//To handle forms in react we can use
//useRef()
//controlled components
//react hook form

// shadcn/UI


//API Key to generate GPT
//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
