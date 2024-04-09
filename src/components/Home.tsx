import data from '../data.json';
import '../styles/home.css';
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

const Home = () => {
  return ( 
    <div className='home-container'>
      <section className='welcome-box'>
        <h3 className='intro'>{data.intro}</h3>
      </section>
      <section className='info-box'></section>
    </div>
  );
};
 
export default Home;