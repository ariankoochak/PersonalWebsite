import React from 'react'
import './Assets/Styles/global.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './Layouts/HomePage/HomePage'
import CloudPage from './Layouts/CloudPage/CloudPage';

export default function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/cloud" element={<CloudPage />}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}
