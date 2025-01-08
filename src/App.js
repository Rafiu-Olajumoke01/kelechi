import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css"



const Home = React.lazy(() => import("./Pages/Home/Index"))
const ProductPage = React.lazy(() => import("./Pages/ProductPage/ProductMain"))
const DesignsPage = React.lazy(() => import("./Pages/DesignsPage/Index"))
const FootBannerPage = React.lazy(() => import("./Pages/FootBanner/Index"))




function App() {
  return (
    <div className="App">
      <React.Suspense>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          <Route path='/DesignsPage' element={<DesignsPage />} />
          <Route path='/FootBannerPage' element={<FootBannerPage />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>

    </div >
  );
}

export default App;
