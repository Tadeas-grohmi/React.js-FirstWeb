import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cislo: ""
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler (){
        this.setState({
            zprava: this.state.value
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.zprava}</div>
                <button onClick={this.clickHandler}>Klik</button>
                <label><input type="Number" value={this.state.value}></input></label>
            </div>
        )
    }
}

export default EventBind
