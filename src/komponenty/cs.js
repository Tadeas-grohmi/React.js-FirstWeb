import react, { Component } from "react"

class Cs extends Component{
    render(){
        const {name, heroname} = this.props
        return <h1>Ahoj {name} aka {heroname}</h1>
    }
}

export default Cs