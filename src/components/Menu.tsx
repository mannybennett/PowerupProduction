import { MenuProps, GenreIcon, Genre } from "../types";
import { CaretDown, CaretUp, Sword, PuzzlePiece, Crown, CastleTurret, Ghost, PersonSimpleRun } from "@phosphor-icons/react";

const genres: GenreIcon[] = [
  { name: 'Action/Adventure', Icon: Sword },
  { name: 'Puzzle', Icon: PuzzlePiece },
  { name: 'RPGs', Icon: Crown },
  { name: 'Strategy', Icon: CastleTurret },
  { name: 'Horror', Icon: Ghost },
  { name: 'Platformers', Icon: PersonSimpleRun },
];

const Menu = ({menuClick, dropDown, handleDropDown, handleMenuClick, setGenre} : MenuProps) => {
  // on genre selection, set genre state to genre name and change menuClick state back to false
  const handleSelection = (genre: Genre) => {
    handleMenuClick();
    setGenre(genre);
  }

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

      </section>      
    </div>
  );
};
 
export default Menu;