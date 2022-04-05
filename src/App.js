import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './nav';

function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
   </BrowserRouter>
    </div>
  ); 
}

export default App;
