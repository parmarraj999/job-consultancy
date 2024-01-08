import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './layout/home/Home';
import About from './layout/about/About';
import Job from './layout/job-book/Job';
import Photo from './layout/photo/Photo';
import Nav from './layout/nav/Nav';
import Album from './layout/photo/album/album';
import Achievement from './layout/photo/achievement/achievement';
import FileUpload from './function/upload/upload';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/job" element={<Job/>}/>
        <Route exact path="/photo" element={<Photo/>}>
          <Route path='' element={<Album/>} />
          <Route path='achievement' element={<Achievement/>} />
        </Route>
        <Route path='/upload' element={<FileUpload/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
