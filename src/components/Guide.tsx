import data from '../data.json';
import '../styles/guide.css';
import { GenreProps } from '../types';
import avi from '../assets/AVI.jpg';
import actionadventure from '../assets/actionadventure.jpeg';
import horror from '../assets/horror.jpeg';
import platformers from '../assets/platformers.jpeg';
import puzzle from '../assets/puzzle.jpeg';
import rpgs from '../assets/rpgs.jpeg';
import strategy from '../assets/strategy.jpeg';

const Guide = ({genre}: GenreProps) => {
  const guide = data.genres.find(option => option.name === genre);

  const images: { [key: string]: string } = {
    ActionAdventure: actionadventure,
    Horror: horror,
    Platformers: platformers,
    Puzzle: puzzle,
    RPGs: rpgs,
    Strategy: strategy,
  };

  const genreSrc = images[genre.replace('/', '')]

  return ( 
    <div className='guide-container'>
      <section className='title'>
        <h2 className='name'>{guide?.name}</h2>
        <div className='divider' />
        <h4 className='main-text'>{guide?.summary}</h4>
      </section>
      <div className='divider' />
      <section className='details'>
        <div className='avi-container'>
          <img className='avi-image' src={avi} alt='image of author' />
        </div>
        <div className='avi-text'>
          <p className='author'>Manny Bennett</p>
          <p className='numerics'>3 min read • April 5, 2024</p>
        </div>
      </section>
      <div className='divider' />
      <img className='genre-image' src={genreSrc} alt='genre image' />
      <section className='content'>
        <h2 className='tag'>Areas of Focus</h2>
        <ol>
          <li><p>{guide?.tips[0].overview}</p></li>
          <li><p>{guide?.tips[1].overview}</p></li>
          <li><p>Recommended Instruments</p></li>
        </ol>
        <div className='divider' />
        <h3 className='overview'>{guide?.tips[0].overview}</h3>
        <p className='main-text'>{guide?.tips[0].content}</p>
        <h3 className='overview'>{guide?.tips[1].overview}</h3>
        <p className='main-text'>{guide?.tips[1].content}</p>
        <h3 className='overview'>Recommended Instruments</h3>
        <h4 className='instrument'>{guide?.recommended_instruments[0].instrument}</h4>
        <div className='description'>
          <div className='vert' />
          <p className='main-text'>{guide?.recommended_instruments[0].description}</p>
        </div>
        <h4 className='instrument'>{guide?.recommended_instruments[1].instrument}</h4>
        <div className='description'>
          <div className='vert' />
          <p className='main-text'>{guide?.recommended_instruments[1].description}</p>
        </div>
        <h4 className='instrument'>{guide?.recommended_instruments[2].instrument}</h4>
        <div className='description'>
          <div className='vert' />
          <p className='main-text'>{guide?.recommended_instruments[2].description}</p>
        </div>
      </section>
    </div>
  );
};
 
export default Guide;