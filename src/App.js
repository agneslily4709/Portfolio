import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import CodingProficiency from './Components/CodingProficiency';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills  from './Components/Skills';

function App() {
  return (
        <>
                <Navbar/>
                <div className='App'>
                        <Home/>
                        <About/>
                        <Skills/>
                        <CodingProficiency/>
                        <Projects/>
                        <Blogs/>
                        <Contact/>
                </div>
                <Footer/>
        </>
  );
}

export default App;