import React, {Component} from 'react';
import Row from './Row'
import PropTypes from 'prop-types'

class Board extends Component {
    state = {
        rows: 19,
    }


        //creates 19 rows, each of which hold 19 squares
    createRows = () => {
        let rows = [];
        for(let i = 0; i < this.state.rows; i++){
            rows.push(<Row
                key = {i}
                rowID = {i}
                blackIsNext = {this.props.blackIsNext}
                handleClick = {this.props.handleClick}
                markers = {this.props.markers}
            />)
        }
        return rows
    }

    render(){

        return(
            <section className = "section">
                <div className = "height-control">
                    <div className = "container">
                            {this.createRows()}
                    </div>
                </div>
            </section>
        );
    }
}

Board.propTypes = {
    markers: PropTypes.array.isRequired,
    blackIsNext: PropTypes.bool.isRequired
}


export default Board;