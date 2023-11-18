import React from 'react'; 
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App.js";
import {ThemeProvider} from '@primer/react';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(


   <ThemeProvider>
      <App/>
          </ThemeProvider>


);
