import React from "react";

import StateProvider from '../store/StateProvider'
import Login from "../components/Login";

const App = () => {
  return (
    <StateProvider>
      <Login/>
    </StateProvider>
  );
};

export default App;
