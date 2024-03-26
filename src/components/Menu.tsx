import { MenuProps } from "../types";

const Menu = ({menuClick} : MenuProps) => {
  return ( 
  <div className={`menu ${menuClick ? 'active' : ''}`}>
        
  </div>
  )
};
 
export default Menu;