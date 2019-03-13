import React, {Component} from 'react';
import SVG from './SVG'

class Column extends Component {
    state = {
        squares: 19
    }

    createSquares = () => {
        let squares = [];
        for(let i = 0; i < this.state.squares; i++){
            squares.push(<SVG
                key = {i}
            />)
        }
        return squares
    }

    render(){
        return(
            <div className = "column">
                {this.createSquares()}
            </div>
        );
    }
}

export default Column;