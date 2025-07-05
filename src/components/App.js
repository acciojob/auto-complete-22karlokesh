
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

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(fruits); // initially show all
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      const filtered = fruits.filter(item =>
        item.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filtered);
      setLoading(false);
    }, 300);

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
};

export default App;
