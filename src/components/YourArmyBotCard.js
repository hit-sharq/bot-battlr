import logo from "./heart-ecg.png";
import { emojis } from "../App";

const YOUR_ARMY_API = "https://bot-battlr-json-server.onrender.com/your_army";
const BOTS_API = "https://bot-battlr-json-server.onrender.com/bots";

function YourArmyBotCard({ bot, id, image, name, botClass, catchphrase, health, damage, armor, setYourArmy, setBotData}) {

  const botEmoji = emojis.find(item=>item[botClass])
  function handleBotDeletion() {
    fetch(`${YOUR_ARMY_API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setYourArmy((prevState) => prevState.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting bot:", error));
  }

  function deleteBot() {
    if (window.confirm(`Warning! This will discharge ${name} forever.Kindly confirm`)) {
      handleBotDeletion();
    }
  }

  function releaseBot() {
    if (window.confirm(`Note, this will release ${name} back into the Bot collection.Kindly confirm `)) {
      handleBotDeletion();
      fetch(BOTS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(bot),
      })
        .then((res) => res.json())
        .then(() => setBotData((data) => [...data, bot]))
        .catch((error) => console.error("Error releasing bot:", error));
    }
  }

  return (
    <div className="card" style={{ minWidth: "10rem", maxWidth: "12rem" }}>
      <img src={image} className="card-img-top" style={{ backgroundColor: "grey", cursor: "alias" }} alt="Bot" onClick={releaseBot}/>
      <div className="card-body">
        <h5 className="card-title">{name} {botEmoji[botClass] && <span> {botEmoji[botClass]}</span>}</h5>
        <p className="card-text">{catchphrase}</p>
        <p className="card-text">
          <img src={logo} style={{ width: "15%" }} alt="health" /> {health} ⚡{damage} 🛡️{armor}
        </p>
        <button
          style={{border: "none", background: "none", position: "absolute", top: "5px", right: "1px"}} onClick={deleteBot}>
          <span style={{ color: "red" }}>
            <b>X</b>
          </span>
        </button>
      </div>
    </div>
  );
}
export default YourArmyBotCard;
