import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css"



const Home = React.lazy(() => import("./Pages/Home/Index"))
const ProductPage = React.lazy(() => import("./Pages/ProductPage/ProductMain"))




function App() {
  return (
    <div className="App">
      <React.Suspense>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>

    </div >
  );
}

export default App;
