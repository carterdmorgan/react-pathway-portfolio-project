import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { useState } from 'react'

function App() {
  const [selectedNav, setSelectedNav] = useState('about');

  function renderDifferentNavSections(nav) {
    switch (nav) {
      case 'about':
        return (
          <About className="nav-section"></About> 
        );
      case 'portfolio':
        return (
          <Portfolio className="nav-section"></Portfolio>
        )
      case 'resume':
        return (
          <Resume className="nav-section"></Resume>
        )
      case 'contact':
        return (
          <Contact className="nav-section"></Contact>
        )
      default:
        return (
          <About className="nav-section"></About> 
        );
    }
  }

  return (
    <div>
      <Header
        setSelectedNav={setSelectedNav}>
      </Header>
      <div className="app-body">
        {renderDifferentNavSections(selectedNav)}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
