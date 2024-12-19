import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skill from './components/skills/skill';

function App() {
  return (
    <>
     <Navbar />
     <div className='container'>
      <Hero />
      <Skill />
     </div>
    </>
  );
}

export default App;
