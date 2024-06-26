import { HeaderProps } from "../types";
import { ArrowSquareUpRight, List } from '@phosphor-icons/react';

const Header = ({menuClick, darkMode, scrolled, handleMenuClick} : HeaderProps) => {
  return ( 
    <header className={darkMode && scrolled ? 'darkScrolled' : (!darkMode && scrolled ? 'lightScrolled' : '')}>
      <div className='logoName'>
        <ArrowSquareUpRight color='rgb(62, 94, 222)' size={28} weight="fill" />
        <h1 className={`${!darkMode && 'black-font'}`}>PowerupProduction</h1>
      </div>
      <List className={`listIcon ${menuClick ? 'iconRotation' : ''}`} onClick={handleMenuClick} size={28} />
    </header>
  );
};
 
export default Header;