import axios from "axios";
import './App.css';

function App() {

  function displayWeather(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`)
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=a61759b6c49305b3341bd63820265f73&units=metric`;
  axios.get(url).then(displayWeather);



  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Hello World!
      </h1>
      </header>
    </div>
  );
}

export default App;
