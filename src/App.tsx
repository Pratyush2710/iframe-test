import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const openRunMaliciousCode = () => {
    window.open('javascript:alert("Executed JS!")');
  };

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            openRunMaliciousCode();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <button
          onClick={() => {
            window.open("https://google.com");
          }}
        >
          Open new tab
        </button>
      </div>
      <p className="read-the-docs">Try clicking count or images</p>
    </>
  );
}
