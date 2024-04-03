export type Genre = 'Action/Adventure' | 'Puzzle' | 'RPGs' | 'Strategy' | 'Horror' | 'Platformers';

export interface MenuProps {
  menuClick: boolean;
  dropDown: boolean;
  genre: Genre;
  darkMode: boolean;
  setGenre: (newValue: Genre) => void;
  setDarkMode: (newValue: boolean) => void;
  handleDropDown: () => void;
  handleMenuClick: () => void;
};

export interface HeaderProps {
  menuClick: boolean;
  scrolled: boolean;
  darkMode: boolean;
  setDarkMode: (newValue: boolean) => void;
  handleMenuClick: () => void;
};

export interface HomeProps {
  menuClick: boolean;
};

export interface GenreProps {
  genre: Genre;
};

export interface GenreIcon {
  name: Genre;
  Icon: any;
};