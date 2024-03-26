import { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import { ArrowSquareUpRight, List } from '@phosphor-icons/react';

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
        <header className={darkMode && scrolled ? 'darkScrolled' : (!darkMode && scrolled ? 'lightScrolled' : '')}>
          <div className='logoName'>
            <ArrowSquareUpRight color='rgb(57, 71, 196)' size={28} weight="fill" />
            <h1>PowerupProduction</h1>
          </div>
          <List className={`listIcon ${menuClick ? 'iconRotation' : ''}`} onClick={handleMenuClick} size={30} />
        </header>
        <main className={menuClick ? 'main-blur' : ''}>

        </main>
        <Menu menuClick={menuClick} />
      </div>
      <footer></footer>
    </div>
  )
};

export default App;