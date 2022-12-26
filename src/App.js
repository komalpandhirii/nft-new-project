import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Suspense , lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './Pages/Home';
import FeaturePage from './Pages/Feature';
import CollectorsPage from './Pages/Collectors';
import AboutPage from './Pages/About';
import NftPage from './Pages/NftMarket';
import SignIn from './Components/SignIn';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/feature' element={<FeaturePage/>}/>
          <Route path='/collectors' element={<CollectorsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/nft' element={<NftPage/>}/>
          {/* <Route path='/sign-in' element={<SignIn/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
