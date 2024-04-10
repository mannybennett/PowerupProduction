import data from '../data.json';
import '../styles/home.css';
import { Link } from 'wouter';
import { HomeProps } from '../types';
// import { Sword, PuzzlePiece, Crown, CastleTurret, Ghost, PersonSimpleRun, Guitar, PianoKeys, MusicNotes, Sliders, MicrophoneStage, Waveform } from "@phosphor-icons/react";

// const iconComponents: { [index: string]: any } = {
//   Sword: Sword,
//   PuzzlePiece: PuzzlePiece,
//   Crown: Crown,
//   CastleTurret: CastleTurret,
//   Ghost: Ghost,
//   PersonSimpleRun: PersonSimpleRun,
//   Guitar: Guitar,
//   PianoKeys: PianoKeys,
//   MusicNotes: MusicNotes,
//   Sliders: Sliders,
//   MicrophoneStage: MicrophoneStage,
//   Waveform: Waveform
// };

const Home = ({setGenre}: HomeProps) => {
  return ( 
    <div className='home-container'>
      <section className='welcome-box'>
        <h3 className='intro'>{data.intro.substring(0, 67)}</h3>
      </section>
      <section className='info-box'>
        <h3 className='text'>{data.intro.substring(67)}</h3>
        <Link href='/actionadventure'>
          <button onClick={()=>setGenre('Action/Adventure')}>Jump In</button>
        </Link>
      </section>
    </div>
  );
};
 
export default Home;