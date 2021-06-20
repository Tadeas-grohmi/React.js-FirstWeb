import React, { Component } from 'react'

class Pocitac extends Component {

    constructor(props){
        super(props)

        this.state = {
            cislo: 0
        }
    }

    zvetsit() {
       // this.setState({
       //     cislo: this.state.cislo + 1
       // }, 
       // () => {
       //     console.log("Cislo:", this.state.cislo)
       // })
        this.setState(predstav => ({
            cislo: predstav.cislo + 1
        }))
        console.log(this.state.cislo)
    }

    zmensit() {
        // this.setState({
        //     cislo: this.state.cislo + 1
        // }, 
        // () => {
        //     console.log("Cislo:", this.state.cislo)
        // })
         this.setState(predstav => ({
             cislo: predstav.cislo - 1
         }))
         console.log(this.state.cislo)
     }

    zvetsit5(){
        this.zvetsit()
        this.zvetsit()
        this.zvetsit()
        this.zvetsit()
        this.zvetsit()
    }

    zmensit5(){
        this.zmensit()
        this.zmensit()
        this.zmensit()
        this.zmensit()
        this.zmensit()
    }
    
    reset(){
        this.setState({
            cislo: 0
        })
    }

    render() {
        return (
            <div>
                <div><h1>Číslo: {this.state.cislo}</h1></div>
                <button onClick={() => this.zvetsit()}>Zvětšit</button>
                <button onClick={() => this.zvetsit5()}>Zvětšit 5x</button>
                <br></br>
                <br></br>
                <button onClick={() => this.zmensit()}>Zmenšit</button>
                <button onClick={() => this.zmensit5()}>Zmenšit 5x</button>
                <br></br>
                <button onClick={() => this.reset()}>Reset</button>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Pocitac
