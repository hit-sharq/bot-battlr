function SelectClass({handleSelectedClass}){
    return(
        <>
        <ul
        className="list-group" style={{ display: "flex", flexDirection: "row" }}>

            <h4 className="d-flex align-items-center">Choose class:</h4> &nbsp;&nbsp;   
            <li className="list-group-item" style={{ flex: 1 }}>
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Assault"
                    onChange={handleSelectedClass}
                    aria-label="..."
                />
                Assault 🛩️
            </li>
            <li className="list-group-item" style={{ flex: 1 }}>
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Captain"
                    onChange={handleSelectedClass}
                    aria-label="..."
                />
                Captain 👨‍✈️
            </li>
            <li className="list-group-item" style={{ flex: 1 }}>
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Defender"
                    onChange={handleSelectedClass}
                    aria-label="..."
                />
                Defender 🛡️
            </li>
            <li className="list-group-item" style={{ flex: 1 }}>
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Medic"
                    onChange={handleSelectedClass}
                    aria-label="..."
                />
                Medic 🚑
            </li>
            <li className="list-group-item" style={{ flex: 1 }}>
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Support"
                    onChange={handleSelectedClass}
                    aria-label="..."
                />
                Support 🪖
            </li>
            <li className="list-group-item" style={{ flex: 1 }}>
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Witch"
                    onChange={handleSelectedClass}
                    aria-label="..."
                />
                Witch 🧙‍♀️
            </li>
       
       
        
       
        
      </ul>
      <br/>
        </>

    )
}
export default SelectClass