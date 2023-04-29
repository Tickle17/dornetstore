import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loader from "./loader"

const App = lazy(() => import('./App'));


ReactDOM.render(
   <React.StrictMode>
      <React.StrictMode>
         <Suspense fallback={<Loader />}>
            <App />
         </Suspense>
      </React.StrictMode>,
   </React.StrictMode>,
document.getElementById('root')
);
