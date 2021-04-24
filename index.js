import React from 'react'
import ReactDOM from 'react-dom'

const headers = {
    mainHeader: 'Give me feedback!',
    statsHeader: 'Statistics'
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    //Button event handlers
    goodButtonHandler =(prevState) => () => {
        this.setState({
            good: prevState.good + 1
        })
    }

    neutralButtonHandler =(prevState) => () => {
        this.setState({
            neutral: prevState.neutral + 1
        })
    }

    badButtonHandler =(prevState) => () => {
        this.setState({
            bad: prevState.bad +1
        })
    }


    render() {
        return (
            <div>
                <Header header={headers.mainHeader}/>
                <button onClick={this.goodButtonHandler(this.state)}>Good</button>
                <button onClick={this.neutralButtonHandler(this.state)}>Neutral</button>
                <button onClick={this.badButtonHandler(this.state)}>Bad</button>
                <Header header={headers.statsHeader}/>
                <Statistics  stats={this.state}/>
            </div>
        )
    }
}

const Header = ({header}) => (
    <h1>{header}</h1>
)

//Statistics component
const Statistics = ({stats}) => {
    const {good, neutral, bad} = stats
    const total = good + neutral + bad
    let average
    let positive
    //Avoid NaN-values
    if (total===0){
        average = '-'
        positive = '-'
    }
    else {
        average = (good - bad) / total
        positive = (good / total) * 100
    }
    return(
        <table>
            <tbody>
                <tr><td>Good</td><td>{good}</td></tr>
                <tr><td>Neutral</td><td>{neutral}</td></tr>
                <tr><td>Bad</td><td>{bad}</td></tr>
                <tr><td>Average</td><td>{average}</td></tr>
                <tr><td>Positive</td><td>{positive} %</td></tr>
            </tbody>
        </table>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))