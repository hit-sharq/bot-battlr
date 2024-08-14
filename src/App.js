import './App.css';
import YourBotArmy from './components/YourBotArmy';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

const YOUR_ARMY_URL = "https://bot-battlr-json-server.onrender.com/your_army";
const BOTS_URL = "https://bot-battlr-json-server.onrender.com/bots";
export const emojis = [{Assault:"🛩️"},{Medic:"🚑"},{Defender:"🛡️"},{Witch:" 🧙‍♀️"},{Captain:"👨‍✈️"},{Support:"🪖"}]

export default function App() {
  const [refetchData,setRefetchData] = useState(false)

  const [yourArmy,setYourArmy] = useState([])
  useEffect(()=>{
    fetch(YOUR_ARMY_URL)
    .then(res=>res.json())
    .then(data=>setYourArmy(data))
    .catch(error => console.error('Error fetching your army data:', error));
  },[])

  const [BotData, setBotData] = useState([]);
  useEffect(() => {
    fetch(BOTS_URL)
      .then((res) =>res.json())
      .then((data) => setBotData(data))
      .catch(error => console.error('Error fetching bot data:', error));
  }, [refetchData]);

  

  return (
    <div className="App">
      <YourBotArmy yourArmy={yourArmy} setYourArmy={setYourArmy} setBotData={setBotData}/>
      <Outlet context={[BotData,setYourArmy,setBotData,yourArmy,setRefetchData]}/>
    </div>
  );
}


