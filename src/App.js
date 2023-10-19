import './App.css';
import Navbar from './commponent/Navbar';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './commponent/Home';
import Weather from './commponent/Weather';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="" exact element={<Home/>}/>
          <Route path="/today" exact element={<Weather/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
