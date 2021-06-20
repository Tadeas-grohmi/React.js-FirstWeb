import React, { Component } from 'react'

class ClassKlik extends Component {

    clickHandler(){
        console.log("Class kliknuti")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>LOOL</button>
            </div>
        )
    }
}

export default ClassKlik
