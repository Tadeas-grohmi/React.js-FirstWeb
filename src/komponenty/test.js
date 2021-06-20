import react from "react"

const Test = props => {
    const {name, heroname} = props
    return  (
        <div>
            <h1>
                Ahoj {name} aka {heroname}
            </h1>
        </div>
    )
}

export default Test