import { useEffect, useState } from "react";

const MyComponent = ({ count }) => {
  useEffect(() => {
    // First: This function will run when the component is mounted
    console.log("🔹 Mounted");

    // Second: This function will run when the component is unmounted
    return () => {
      console.log("❌ Unmounted");
    };
  }, []); // An empty array means this effect runs only once when the component mounts.

  useEffect(() => {
    console.log(`🔄 Updated → count is now ${count}`);
  }, [count]); // When we pass a variable in the array, means this effect will run whenever that variable changes.
    // In this case, it will run every time the 'count' changes.

  useEffect(() => {
    console.log(new Date().getMilliseconds());
  }); // In this case, it will run at EVERY re-render

  return (
    <div className="card mt-3">
      <div className="card-body">
        <p className="card-text">
          <strong>Count value:</strong> {count}
        </p>
      </div>
    </div>
  );
};

// Parent component with Bootstrap buttons
const LifecycleDemo = () => {
  // useState is a hook function that lets you add state to function components and manage it.
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Lifecycle Demo</h2>

      {!show && (
        <button className="btn btn-primary me-2" onClick={() => setShow(true)}>
          Render Component
        </button>
      )}

      {show && (
        <>
          <button
            className="btn btn-success me-2"
            onClick={() => setCount((c) => c + 1)}
          >
            Update Component
          </button>
          <button className="btn btn-danger" onClick={() => setShow(false)}>
            Unmount Component
          </button>
          <MyComponent count={count} />
        </>
      )}
    </div>
  );
};

export default LifecycleDemo;
