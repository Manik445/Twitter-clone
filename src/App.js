import './App.css';
import React from 'react'
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'; 


function App() {
  return (
    // this app is by default inline that is in column
    <div className="App">    
    
    {/* sidebar for twitter */}
    <SideBar />     

     {/* center view / tweets viewer section */}
      <Feed />

      {/* rightmost part Widgets section */}
      <Widgets />

    </div>
  );    
}   

export default App;
