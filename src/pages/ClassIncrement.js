import React, {Component} from 'react';

import '../Apps.css';

class ClassIncrement extends Component {
    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
    }

    increment = () => {
        let newNum = this.state.num // 1

        this.setState({
            num: newNum
        
        })
    }

    render(){
        return (
            <div className="App">
                <div>{this.state.num}</div>

                <span>
                    <button onClick={this.increment} >
                    +
                    </button>
                    <button>-</button>
                </span>
            </div>
        )
    }
}