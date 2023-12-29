import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './layout/home/Home';
import About from './layout/about/About';
import Job from './layout/job-book/Job';
import Photo from './layout/photo/Photo';
import Nav from './layout/nav/Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/job" element={<Job/>}/>
        <Route exact path="/photo" element={<Photo/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
