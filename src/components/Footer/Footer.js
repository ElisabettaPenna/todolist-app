import React from "react"
import "./Footer.css"

export default function Footer({list, setList}){

    return(
        <>
        
    <div className="footer">
        {list.length === 0 ? 
           <p className="footer">Non hai impegni!</p> : 
           <p className="footer">Hai {list.length} impegn{list.length === 1? "o" : "i"} in lista!</p>}
    </div>
        </>
    )
}