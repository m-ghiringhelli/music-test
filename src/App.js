import * as Tone from 'tone';
import './App.css';

const synth = new Tone.Synth().toDestination();

const handleClick = async (note) => {
  synth.triggerAttackRelease(note, '8n');
  console.log('clicked');
  await Tone.start();
};

// (e) => e.keyCode === 13 && handleClick('C5');

function App() {
  return (
    <div className="App">
      App
      <button onClick={() => handleClick('C4')}>here is a button</button>
      <button onClick={() => handleClick('G4')}>heres another</button>
      <textarea onKeyPress={(e) => (e.code === 'KeyA') && handleClick('F4')}></textarea>
    </div>
  );
}

export default App;
