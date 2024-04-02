import { MenuProps, GenreIcon, Genre } from "../types";
import { CaretDown, CaretUp, Sword, PuzzlePiece, Crown, CastleTurret, Ghost, PersonSimpleRun, GithubLogo } from "@phosphor-icons/react";

const genres: GenreIcon[] = [
  { name: 'Action/Adventure', Icon: Sword },
  { name: 'Puzzle', Icon: PuzzlePiece },
  { name: 'RPGs', Icon: Crown },
  { name: 'Strategy', Icon: CastleTurret },
  { name: 'Horror', Icon: Ghost },
  { name: 'Platformers', Icon: PersonSimpleRun },
];

const Menu = ({menuClick, dropDown, darkMode, handleDropDown, handleMenuClick, setGenre, setDarkMode} : MenuProps) => {
  // on genre selection, set genre state to genre name and change menuClick state back to false
  const handleSelection = (genre: Genre) : void => {
    handleMenuClick();
    setGenre(genre);
  };

  const handleDarkMode = () : void => {
    setDarkMode(!darkMode)
  };

  const handleGitHub = () : void => {
    window.open('https://github.com/mannybennett/PowerupProduction', '_blank');
  };
  

  return ( 
    <div className={`menu ${menuClick ? 'active' : ''}`}>
      <section className='nav-container'>
        <div onClick={handleMenuClick} className='nav'>
          <h2 className='nav-category'>Home</h2>
        </div>
        <div className={`nav ${dropDown ? 'dropDown' : ''}`}>
          <div onClick={handleDropDown} className='genre-caret'>
            <h2 className='nav-category'>Genres</h2>
            {dropDown ? <CaretUp size={20} /> : <CaretDown size={20} />}
          </div>
          {!dropDown ? null : 
            <div className='genre-container'>
              {genres.map((genre) => (
                <div onClick={()=>handleSelection(genre.name)} className='genre' key={genre.name}>
                  <div className='genre-icon'>
                    <genre.Icon size={19} />
                  </div>
                  <h3 className='genre-title'>{genre.name}</h3>
                </div>
              ))}
            </div>
          }
        </div>
        <div onClick={handleMenuClick} className='nav'>
          <h2 className='nav-category'>About</h2>
        </div>
        <div onClick={handleMenuClick} className='nav'>
          <h2 className='nav-category'>Contact</h2>
        </div>
      </section>
      <section className='nav-footer'>
        <div className='button-container'>
          <button onClick={handleDarkMode} className={`mode-button ${darkMode ? '' : 'selected-mode'}`}>Light</button>
          <button onClick={handleDarkMode} className={`mode-button ${darkMode ? 'selected-mode' : ''}`}>Dark</button>
        </div>
        <button onClick={handleGitHub} className='github-button'>
          <GithubLogo color={darkMode ? 'black' : 'rgb(240,240,243)'} size={16} />
          <p id={darkMode ? '' : 'github-white'}>GitHub</p>
        </button>
      </section>      
    </div>
  );
};
 
export default Menu;