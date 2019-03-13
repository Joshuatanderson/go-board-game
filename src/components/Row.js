import React, {Component} from 'react';
import SVG from './SVG'

class Row extends Component {
    state = {
        squares: 19,
    }

        //creates squares
    createSquares = (rowID, markers, handleClick, blackIsNext) => {
        let squares = [];
        for(let i = 0; i < this.state.squares; i++){
            squares.push(<SVG
                key = {i}
                row = {rowID}
                col = {i}
                    //chooses row marker
                marker = {markers[rowID][i]}
                handleClick = {handleClick}
                blackIsNext = {blackIsNext}
            />)
        }
        return squares;
    }

    render(){
        const {
            rowID,
            markers,
            handleClick,
            blackIsNext,
        } = this.props
        return(
            <div className = "row">
                {this.createSquares(rowID, markers, handleClick, blackIsNext)}
            </div>
        );
    }
}

export default Row;