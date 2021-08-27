import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./styles/global";

const App = () => (
  <div>
    Hello world
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
