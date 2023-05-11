import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loader from "./loader"

const App = lazy(() => import('./App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <React.StrictMode>
         <Suspense fallback={<Loader />}>
            <App />
         </Suspense>
      </React.StrictMode>
   </React.StrictMode>
);
