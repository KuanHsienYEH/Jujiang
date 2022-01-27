import Navbar from './components/shared/Navbar';
import MainVisual from './components/homepage/MainVisual';
import LastestJob from './components/homepage/LastestJob';
import './styles/shared/Init.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainVisual />
     <LastestJob />
    </div>
  );
}

export default App;
