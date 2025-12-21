import React, { useEffect, useState } from "react";
import "./widget.css";

const STORAGE_KEY = "counter-widget-value";

export default function Widget() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved !== null ? Number(saved) : 0;
  });

  // Save to localStorage whenever count changes
  useEffect(() => {
    //@ts-ignore
    localStorage.setItem(STORAGE_KEY, count);
  }, [count]);

  return (
    <div className="widget">
      <h3>Counter Widget</h3>
      <p className="count">{count}</p>

      <div className="actions">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
