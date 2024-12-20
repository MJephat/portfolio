import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skill from './components/skills/skill';
import WorkExperience from './components/workExperince/workExperience';

function App() {
  return (
    <>
     <Navbar />
     <div className='container'>
      <Hero />
      <Skill />
      <WorkExperience />
     </div>
    </>
  );
}

export default App;
