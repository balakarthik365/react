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