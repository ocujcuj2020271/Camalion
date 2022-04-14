import React from 'react';
import './App.css';


function App() {
  const color = ["Green", "Orange", "Yellow", "Blue", "White", "Pink", "White", "Brown", "Gray", "Purple"]
  let [colors, setColors] = React.useState("White");

  function getColor(){
    let color1 = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[color1]; 
    setColors(color[color1]);
  }

  return (
    <div className="App">
       <div id='containerText'>
        <p id='tittleColor'>Background Color : {colors}</p>
        <button onClick={getColor}>Click me</button>
      </div>
    </div>
  );
}

export default App;
