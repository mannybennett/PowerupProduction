import data from '../data.json';
import '../styles/guide.css';
import { GenreProps } from '../types';

const Guide = ({genre}: GenreProps) => {
  const guideObj = data.genres.find(option => option.name === genre)

  return ( 
    <div className='guide-container'>
      <section className='title'></section>
      <section className='details'></section>
      <section className='image'></section>
      <section className='content'></section>
      <h2>{guideObj?.name}</h2>
      <h4>{guideObj?.summary}</h4>
      <br />
      <h4>Tips:</h4>
      <h5>{guideObj?.tips[0].overview}</h5>
      <p>{guideObj?.tips[0].content}</p>
      <br />
      <h5>{guideObj?.tips[1].overview}</h5>
      <p>{guideObj?.tips[1].content}</p>
      <br />
      <h4>Recommended Instruments:</h4>
      <h5>{guideObj?.recommended_instruments[0].instrument}</h5>
      <p>{guideObj?.recommended_instruments[0].description}</p>
      <br />
      <h5>{guideObj?.recommended_instruments[1].instrument}</h5>
      <p>{guideObj?.recommended_instruments[1].description}</p>
      <br />
      <h5>{guideObj?.recommended_instruments[2].instrument}</h5>
      <p>{guideObj?.recommended_instruments[2].description}</p>
      <br />
    </div>
  );
};
 
export default Guide;