import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
          <Route path="/" exact element={<HomePage/>} />
        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
