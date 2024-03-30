import { MenuProps } from "../types";

const Menu = ({menuClick} : MenuProps) => {
  return ( 
  <div className={`menu ${menuClick ? 'active' : ''}`}>
    <div className='nav-container'>
      <div className='nav'></div>
      <div className='nav'></div>
      <div className='nav'></div>
      <div className='nav'></div>
    </div>      
  </div>
  )
};
 
export default Menu;