import "./App.css";

import { createContext, useState } from "react";

export const userContext = createContext(null);
function App() {
  const [state, setState] = useState({ status: false, user: {} });
  return (
    <div className="App">
      <userContext.Provider value={{ state, setState }}></userContext.Provider>
    </div>
  );
}

export default App;
