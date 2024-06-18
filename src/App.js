import './App.css';
import { useState } from 'react';
import Card from '../src/components/card.jsx';

function App() {
  const [survivorPerks, setSurvivorPerks] = useState([]);
  const [killerPerks, setKillerPerks] = useState([]);

  const get_survivor_perks = async () =>{
    try{
      const response = await fetch('https://dbd.tricky.lol/api/randomperks?role=survivor');
      const data = await response.json();
      setSurvivorPerks(Object.values(data));
      // console.log(perks);
    }catch(error){
      console.log("failed to get perks");
    }
  }

  const get_killer_perks = async () =>{
    try{
      const response = await fetch('https://dbd.tricky.lol/api/randomperks?role=killer');
      const data = await response.json();
      setKillerPerks(Object.values(data));
      // console.log(perks);
    }catch(error){
      console.log("failed to get perks");
    }
  }


  const handleSurvivorShuffle = () => {
    get_survivor_perks();
  }

  const handleKillerShuffle = () => {
    get_killer_perks();
  }

  return (
    <div className="App">
      <div className='perks-container'>
        {survivorPerks.map((perk,index)=>(
          <Card
            key={index}
            name={perk.name}
            image={perk.image}
          />
        ))}
      </div>
      <button className="button" onClick={handleSurvivorShuffle}>Survivor Shuffle</button>
      <div className='perks-container'>
        {killerPerks.map((perk,index)=>(
          <Card
            key={index}
            name={perk.name}
            image={perk.image}
          />
        ))}
      </div>
      <button className="button" onClick={handleKillerShuffle}>Killer Shuffle</button>
    </div>
  );
}

export default App;
