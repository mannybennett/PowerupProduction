import data from '../data.json';
import '../styles/home.css';
import { Sword, PuzzlePiece, Crown, CastleTurret, Ghost, PersonSimpleRun, Guitar, PianoKeys, MusicNotes, Sliders, MicrophoneStage, Waveform } from "@phosphor-icons/react";

const iconComponents: { [index: string]: any } = {
  Sword: Sword,
  PuzzlePiece: PuzzlePiece,
  Crown: Crown,
  CastleTurret: CastleTurret,
  Ghost: Ghost,
  PersonSimpleRun: PersonSimpleRun,
  Guitar: Guitar,
  PianoKeys: PianoKeys,
  MusicNotes: MusicNotes,
  Sliders: Sliders,
  MicrophoneStage: MicrophoneStage,
  Waveform: Waveform
};

const icons = [
  { name: 'Sword', delay: '0s' },
  { name: 'MusicNotes', delay: '0.2s' },
  { name: 'PuzzlePiece', delay: '0.4s' },
  { name: 'MicrophoneStage', delay: '0.6s' },
  { name: 'Crown', delay: '0.8s' },
  { name: 'Guitar', delay: '1s' },
  { name: 'CastleTurret', delay: '1.2s' },
  { name: 'PianoKeys', delay: '1.4s' },
  { name: 'Ghost', delay: '1.6s' },
  { name: 'Sliders', delay: '1.8s' },
  { name: 'PersonSimpleRun', delay: '2s' },
  { name: 'Waveform', delay: '2.2s' },
  { name: 'Sword', delay: '2.5s' },
  { name: 'MusicNotes', delay: '2.7s' },
  { name: 'PuzzlePiece', delay: '2.9s' },
  { name: 'MicrophoneStage', delay: '3.1s' },
  { name: 'Crown', delay: '3.3s' },
  { name: 'Guitar', delay: '3.5s' },
  { name: 'CastleTurret', delay: '3.7s' },
  { name: 'PianoKeys', delay: '3.9s' },
  { name: 'Ghost', delay: '4.1s' },
  { name: 'Sliders', delay: '4.3s' },
  { name: 'PersonSimpleRun', delay: '4.5s' },
  { name: 'Waveform', delay: '4.7s' },
];

const Home = () => {
  return ( 
    <div className='home-container'>
      <section className='welcome-box'>Welcome</section>
      <div className="animated-icons">
        {icons.map((icon) => {
          const IconComponent = iconComponents[icon.name];
          return (
            <IconComponent
              size={30}
              key={icon.name}
              className={`animated-icon phos phos-${icon.name}`}
              style={{ animationDelay: icon.delay }}
           />
          );
        })}
      </div>
      <section className='info-box'>{data.intro}</section>
    </div>
  );
};
 
export default Home;