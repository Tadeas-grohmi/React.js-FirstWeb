import React from "react"
import react from "react"
import App from "../App"

const Ahoj = () => {
//    return(
//        <div className="Test">
//            <h2>Ahoj moeeeee</h2>
//        </div>
//    )
    return React.createElement(
        "div", 
        {id: "Ahoj", className:"Hoj"}, 
        React.createElement("h1", null, "Ahoj tade")
        )
} 

export default Ahoj