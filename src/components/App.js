
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import "./../styles/App.css";

// You can store the static array here
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [query, setQuery] = useState("");        // input value
  const [suggestions, setSuggestions] = useState([]); // async filtered results
  const [loading, setLoading] = useState(false);     // simulate async

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    // Simulate async call
    const handler = setTimeout(() => {
      const filtered = fruits.filter(item =>
        item.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filtered);
      setLoading(false);
    }, 300); // delay 300ms

    // Cleanup on new keystroke
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fruits..."
      />

      {loading && <div>Loading...</div>}

      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

