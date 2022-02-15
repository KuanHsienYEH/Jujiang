import Navbar from './components/shared/Navbar';
import MainVisual from './components/homepage/MainVisual';
import LastestJob from './components/homepage/LastestJob';
import { Route, Routes } from 'react-router-dom';
import './styles/shared/Init.css';
import Myreact from './pages/Myeact';
import Algorithm from './pages/Algorithm';
import JS from './pages/JS';
import About from './pages/About';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainVisual />
     <main>
       <Routes>
        <Route path="/react" element={<Myreact />}/>
        <Route path="/algorithm" element={<Algorithm />}/>
        <Route path="/js" element={<JS />}/>
        <Route path="/about" element={<About />}/>
       </Routes>
     </main>
     <LastestJob />
    </div>
  );
}

export default App;
