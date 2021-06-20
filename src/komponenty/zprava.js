import react, { Component } from "react"

class Zprava extends Component{

    constructor(){
        super()
        this.state = {
            zprava: "Ahoj cece"
        }

    }

    ZmenaZpravy(){
        this.setState({
            zprava: "LOOOOOL SES GAY"
        })
    }

    ZmenaZpravy2(){
        this.setState({
            zprava2: "LMAOOOOOO"
        })
    }

    ZmenaZpravy3(){
        this.setState({
            zprava2: ""
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.zprava}</h1>
                <h1>{this.state.zprava2}</h1>
                <button onClick={() => this.ZmenaZpravy()}>Ahojda</button>
                <button onClick={() => this.ZmenaZpravy2()}>Hehe</button>
                <button onClick={() => this.ZmenaZpravy3()}>Hehee</button>
            </div>
        )
    }
}

export default Zprava