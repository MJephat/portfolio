import './App.css';
import ContactMe from './components/contactMe/ContactMe';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skill from './components/skills/skill';
import WorkExperience from './components/workExperince/workExperience';
import Footer from './Footer/footer';

function App() {
  return (
    <>
     <Navbar />
     <div className='container'>
      <Hero />
      <Skill />
      <WorkExperience />
      <ContactMe />
     </div>
     <Footer />
    </>
  );
}

export default App;
