import logo from './logo.svg';
import './App.css';
import ai_image from './images/ai1.webp';
import Buttons from './Buttons.js'
import LoadImage from './LoadImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LoadImage />
        <Buttons label = "Real"/> <Buttons label = "AI"/>
        
        
      </header>
    </div>
  );
}

export default App;
