import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">  
      <div className='container'>
    
    <Weather defaultCity = "New York" />
    <footer> This project was coded by Rita Bern and is
    <a href="https://github.com/finnocino/react-weather-project" 
    target='_blank' 
    rel="noreferrer"> open-sourced on Github </a>
     </footer>
     </div>
    </div>
  );
}

