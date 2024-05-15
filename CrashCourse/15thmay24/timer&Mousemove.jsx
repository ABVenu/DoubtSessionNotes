import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // update()
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("cleaned up");
      clearInterval(id);
      setCount(0)
    };
  }, [isRunning]);

  function toggleFn() {
    setIsRunning(!isRunning);
  }
  return (
    <div>
      <button onClick={toggleFn}>{isRunning ? "UnMount" : "Mount"}</button>
      {isRunning && <h3>Count:- {count}</h3>}
    </div>
  );
};

export default Timer;

import React, { useEffect, useState } from "react";

const Eventlistner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const mouseMovement = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", (event) => {
      mouseMovement(event);
    });

    return () => {
      console.log("cleaned up");
      document.removeEventListener("mousemove", mouseMovement);
    };
  }, [isRunning]);

  function toggleFn() {
    setIsRunning(!isRunning);
  }
  return (
    <div>
      <button onClick={toggleFn}>{isRunning ? "UnMount" : "Mount"}</button>
      {isRunning && (<h3>
        x:{mousePosition.x}, y: {mousePosition.y}
      </h3>)}
    </div>
  );
};

export default Eventlistner;

