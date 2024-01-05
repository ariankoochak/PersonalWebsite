import React from 'react'
import './Assets/Styles/global.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './Layouts/HomePage/HomePage'

export default function App() {
  return (
      <>
          <HomePage />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}
