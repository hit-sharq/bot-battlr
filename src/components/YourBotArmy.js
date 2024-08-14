import YourArmyBotCard from "./YourArmyBotCard";

function YourBotArmy({yourArmy,setYourArmy,setBotData}){

    return(
        <>
            {yourArmy[0] && <div className="mb-2 p-1" style={{ overflowX: 'auto', display: 'flex', gap: "1rem", background: "#C0FF02" }}>
        {
            yourArmy.map(bot=>{
                return(
                    <YourArmyBotCard key={`Y${bot.id}`} id={bot.id} bot={bot} image={bot.avatar_url} name={bot.name} botClass={bot.bot_class} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} setYourArmy={setYourArmy} setBotData={setBotData}/>
                )
            })

        }
        

    </div>}
   
    </>);
    
}
export default YourBotArmy