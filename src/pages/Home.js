import React from 'react';
// import CardList from '../organisms/Cardlist'

export default class Home extends React.Component {
    render(){
        return (
            <div>
                <div>Home</div>
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