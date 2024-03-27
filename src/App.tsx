import { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuClick, setMenuClick] = useState<boolean>(false);

  const handleMenuClick = () : void => {
    setMenuClick(!menuClick)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className='body-container'>
        <Header darkMode={darkMode} scrolled={scrolled} menuClick={menuClick} handleMenuClick={handleMenuClick} />
        <Menu menuClick={menuClick} />
        <main className={menuClick ? 'main-blur' : ''}>

        </main>
      </div>
      <footer></footer>
    </div>
  )
};

export default App;