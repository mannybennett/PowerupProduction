import { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import { Genre } from './types';

// 600px max width for mobile view

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuClick, setMenuClick] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre>('Action/Adventure');

  const handleDropDown = () : void => {
    setDropDown(!dropDown);
  };

  const handleMenuClick = () : void => {
    setMenuClick(!menuClick);

    // if dropDown is open, close it on menu click so that it is closed on menu reopen, and delay it by 0.5s so that it is not executed until after out of view
    dropDown && setTimeout(() => {
      setDropDown(!dropDown);
    }, 500);
  };

  // When scroll event happens, change scrolled state
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
        <Header setDarkMode={setDarkMode} darkMode={darkMode} scrolled={scrolled} menuClick={menuClick} handleMenuClick={handleMenuClick} />
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} menuClick={menuClick} setGenre={setGenre} genre={genre} dropDown={dropDown} handleMenuClick={handleMenuClick} handleDropDown={handleDropDown}/>
        <main className={menuClick ? 'main-blur' : ''}></main>
      </div>
    </div>
  );
};

export default App;