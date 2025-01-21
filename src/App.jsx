import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',   // Full weekday name (e.g., Monday)
    year: 'numeric',   // Full year (e.g., 2025)
    month: 'long',     // Full month name (e.g., January)
    day: 'numeric',    // Day of the month (e.g., 21)
  });
  return (
    <div className = "container">
      <h1 className = "Date">
        {formattedDate}
      </h1>
      <h2 className="Time">
        {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      </h2>
    </div>
  );
}
export default App;