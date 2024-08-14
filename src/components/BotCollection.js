import { useOutletContext } from "react-router-dom";
import BotCard from "./BotCard";
import { useState } from "react";
import SortBar from "./SortBar";
import SelectClass from "./SelectClass";

function BotCollection() {
  const [allChecked,setAllChecked] = useState([])
  const [BotData] = useOutletContext();
  const [sortOption,setSortOption] = useState("")

  function handleSelectedClass(e){ 
    setAllChecked(prevState => {
      if (e.target.checked) {
        return [...prevState, e.target.value];
      } else {
        return prevState.filter(item => item !== e.target.value);
      }
    })
  }

  function handleSortOption(e){
    setSortOption(e.target.value)
  }
  
  function sortBots(sortOption){
    if(sortOption==="health"){
      return (a,b)=>b.health-a.health
    }
    else if(sortOption === "armor"){
      return (a,b) => b.armor-a.armor
    }
    else if(sortOption === "damage" ){
      return (a,b) => b.damage-a.damage
    }
    else{
      return ()=>0
    }
  }

  const botsToDisplay = BotData.filter(item=>{
    if(allChecked.length>0){
      return  allChecked.includes(item.bot_class) 
    }
    else return true
  })


  if (!BotData[0]) {
    return <h2>Loading...</h2>;
  }
    return (
    <>
      <SelectClass handleSelectedClass={handleSelectedClass}/>
      
      <SortBar handleSortOption={handleSortOption} sortOption={sortOption}/>
     
      <div
        style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem",marginTop:"1rem"}}>
        {botsToDisplay.sort(sortBots(sortOption)).map((bot) => {
          return (
            <BotCard
              key={bot.id}
              id={bot.id}
              image={bot.avatar_url}
              name={bot.name}
              botClass={bot.bot_class}
              catchphrase={bot.catchphrase}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
            />
          );
        })}
      </div>
    </>
  );
}
export default BotCollection;
