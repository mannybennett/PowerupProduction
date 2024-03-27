import { MenuProps } from "../types";

const Menu = ({menuClick} : MenuProps) => {
  return ( 
  <div className={`menu ${menuClick ? 'active' : ''}`}>
    <div className='nav-container'>
      
    </div>      
  </div>
  )
};
 
export default Menu;