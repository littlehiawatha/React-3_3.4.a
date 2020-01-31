import React from 'react';
import data from './data'
import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'


class App extends React.Component {
 constructor(){
   super();
   this.state = {

   }
 }


 render(){
   console.log(data)
  return (
    <div className="App">
      <Header/>
      <Body/>
      
    </div>
  );
 }
}

export default App;
