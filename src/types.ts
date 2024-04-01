export interface MenuProps {
  menuClick: boolean;
  dropDown: boolean;
  handleDropDown: () => void;
  handleMenuClick: () => void;
};

export interface HeaderProps {
  menuClick: boolean;
  scrolled: boolean;
  darkMode: boolean;
  handleMenuClick: () => void;
};

export interface Genre {
  name: string;
  Icon: any;
}