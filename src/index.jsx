import React from "react";
import { createRoot } from "react-dom/client";
import './index.scss'

import Module from "./module";

const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <>
    <h2>Привет Мир, я React!</h2>
    <Module/>
  </>
);