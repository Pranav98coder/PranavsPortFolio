import React from 'react';
import Home from './home.jsx';
import "./App.css";
import AboutMe from './components/About.jsx';
import Work from './components/Mywork.jsx';
import ContMe from './components/Contact.jsx';
import Send from './components/Connect.jsx';

//import './components/face.png';
const App = () => {
  return (
    <><div className="app">
     
      <Home />
      <AboutMe/>
      <Work/>
      <ContMe/>
      <Send/>
      
      </div>
    </>
    );
}
 
export default App;
