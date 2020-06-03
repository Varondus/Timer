import React from 'react';
import './App.css';

const currentDateString = '';
function fetchDate() {
  const today = new Date()   
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const miliseconds = today.getMilliseconds();
  const currentDate = [day, hours, minutes, seconds, miliseconds];
  const currentDateString = currentDate[1]+' - '+currentDate[2]+' - '+currentDate[3]+' - '+currentDate[4]+' - '+currentDate[0];
  return currentDateString
}

setInterval(function() {
    const dupa = fetchDate();
    document.getElementById('timer').innerHTML = dupa
  }, 500
) 


function App() {
  return (
    <div>
      <header className="App-header">
        tu bendzie san francisko 
        <p id='timer'>  
        </p>
        <button onClick={fetchDate()}>Get the time! </button>
        {currentDateString}
      </header>
    </div>
  );
}

export default App;
