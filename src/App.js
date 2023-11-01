import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import About from './components/About/About';




function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}  />
    </Routes>

    <Footer />
    </div>
  );
}

export default App;
