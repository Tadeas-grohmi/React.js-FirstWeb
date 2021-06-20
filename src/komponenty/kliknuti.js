import React from 'react'

function Kliknuti() {

    function clickHandler(){
        console.log("Klikl jsi")
    }

    return (
        <div>
            <button onClick={clickHandler}>Klikni pls</button>
        </div>
    )
}

export default Kliknuti
