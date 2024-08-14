import { useState } from "react"

const BOT_API_URL = "https://bot-battlr-json-server.onrender.com/bots";
function EditBot({bot,handleEditForm,setRefetchData}){
    const [formData,setFormData] = useState({name:bot.name,health:bot.health,damage:bot.damage,armor:bot.armor,catchphrase:bot.catchphrase})

    function handleChange(e){
        const {name,value} = e.target;
        setFormData(formData=>({...formData,[name]:value}))
    }

    function handleSaveChanges(e){
        e.preventDefault();
        handleEditForm(formData)
        updateBackend();
    }

    function updateBackend(){
        fetch(`${BOT_API_URL}/${bot.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(()=>setRefetchData(prev=>!prev))
    }
    return(
        <>
        <form className="form-horizontal text-center" onSubmit={handleSaveChanges}>
            <div className="form-group mb-2">
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="health">Health:</label>
                <input className="form-control" type="text" name="health" id="health" placeholder="Health" value={formData.health} onChange={handleChange}/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="damage">Damage:</label>
                <input className="form-control" type="text" name="damage" id="damage" placeholder="Damage" value={formData.damage} onChange={handleChange} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="armor">Armor:</label>
                <input className="form-control" type="text" name="armor" id="armor" placeholder="Armor" value={formData.armor} onChange={handleChange} />
            </div>
           
            <div className="form-group">
                <label htmlFor="catchphrase">Catchphrase:</label>
                <input className="form-control" type="text" name="catchphrase" id="catchphrase" placeholder="Catchphrase" value={formData.catchphrase} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Save changes</button>
        </form>
        </>
    )
}
export default EditBot