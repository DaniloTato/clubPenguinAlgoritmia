# useState

### What it does

It lets you add state (data that changes over time) to a React component.

State is anything the UI needs to “remember”, such as:

- form inputs (email, password)
- counters
- toggles (open/close, show/hide)
- fetched data
- UI status (loading, error, success)

## Important idea

React components re-run every time state changes.

When state updates, React re-renders the component automatically for it to reflect the new value.

## Syntax

```js
const [state, setState] = useState(initialValue);
```

## Parameters

1. **initialValue**
   - The starting value of the state
   - Can be any type: string, number, array, object, etc.

## Examples:

```js
useState(0); // number
useState(""); // string
useState([]); // array
useState({}); // object
```

2. **Returned values**

useState returns an array with 2 elements:

1. state variable
   - holds the current value
2. setter function
   - used to update the state

Example:

```js
const [count, setCount] = useState(0);
```

- count -> current value
- setCount() -> function to update value

You NEVER modify state directly.

**Wrong:**

```js
count = count + 1;
```

**Correct:**

```js
setCount(count + 1);
```

## Common use cases

Counter

```js
const [count, setCount] = useState(0);
```

Input field

```js
const [email, setEmail] = useState("");
```

Toggle UI

```js
const [isOpen, setIsOpen] = useState(false);
```

useState wraps data to be persistent, allowing application state.

# useEffect

### What it does

It lets you run **side effects** in a React component.

Side effects are things that happen outside the render process, such
as: - fetching data from an API - setting up timers (setInterval,
setTimeout) - subscribing to events (websockets, listeners) - manually
interacting with the DOM

### Important idea

React rendering should be pure (UI = function of state/props).

`useEffect` allows you to run code **after rendering happens**.

## Syntax

```js
useEffect(() => {
  // effect logic here

  return () => {
    // cleanup logic (optional)
  };
}, [dependencies]);
```

## Parameters

1.  **callback function**
    - Runs after render
2.  **dependency array (optional)**
    - Controls when the effect runs

### Behavior:

- No array → runs after EVERY render
- Empty array `[]` → runs only ONCE (on mount)
- `[value]` → runs when that value changes

## Cleanup function

The function returned inside `useEffect` is called a **cleanup
function**.

It is used to: - clear intervals - remove event listeners - clean up
resources

It runs: - before the component unmounts - or before the effect re-runs

## Does it re-render the component?

`useEffect` does NOT cause re-renders.

It runs **after rendering**.

useEffect is for “things outside rendering”

It handles work that should happen because the UI changed, but that doesn’t belong inside rendering itself, but does not cause a re-render.
