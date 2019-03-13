import React, {Component} from 'react';
import Header from './Header';
import Board from './Board';

class App extends Component {
    state = {
        markers: Array(19).fill(Array(19).fill('svg-marker')),
        blackIsNext: true,
    };

    // Whenever a stone is played, each neighbor needs to be checked for it's safety
    // each stone will need an array of neighbors.  
    //if the stone has a safe spot, it will return out of the function
    //if the stone only has enemyNeighbors, it will be captured. 
    // if the stone has a friendlyNeighbor, 
    //push the inDanger stone into an array
    // the find neighbors function will need to be run on it, 
    //check safety function.

    //Click handler
        //sets next piece to alt color
        //changes black is next
    handleClick = (row, col, blackIsNext) => {
            // check to see if space is empty
        if (this.state.markers[row][col] ==='svg-marker') {
                //sets color for new marker
            let color = blackIsNext ? "marker-dark" : "marker-light"
            let newMarkers = this.alterMarkerArray(row, col, color);
                //sets markers state, blackIsNext state
            this.setState({
                markers: newMarkers,
                blackIsNext: !blackIsNext
            })
        }
            // creates stone object
            let stone = {
                row,
                col,
                color: this.state.markers[row][col].color
            };

            //error: the color of the stone is updating after the function runs


            //checks safety
        let neighbors = this.getNeighbors(stone.row, stone.col);
        console.log(`neighbor: ${neighbors[0]}`);
            //checks neighbor's safety
        neighbors.forEach(currentStone => {
            let safe = this.checkSafety(currentStone);
            if (safe === false) {
                console.log(`I'm captured`);
                this.setState({
                    markers: this.alterMarkerArray(stone.row, stone.col, 'svg-marker')
                });
            }
        });
        
        
    }




    //finds enemy neighbors
    checkSafety(stone) {
        console.log(stone);
        let neighbors = this.getNeighbors(stone.row, stone.col);
        let friendlyNeighbors = [];
        let activeColor = stone.color;
        let opposingColor = this.state.blackIsNext ? 'marker-light' : 'marker-dark';
        let safe = false;
        
        let enemyNeighbors = [];

        for (let i = 0; i < neighbors.length; i ++){
            if (neighbors[i].color === activeColor) {
                friendlyNeighbors.push(neighbors[i]);
                safe = true;
            } else if (neighbors[i].color === opposingColor){
                enemyNeighbors.push(neighbors[i]);
                console.log(neighbors.length - enemyNeighbors.length);
                    //runs capture function
            } else if (neighbors[i].color === 'svg-marker'){
                safe = true;
            }
        }
        console.log(neighbors);
        console.log(safe);
        return safe;
    }

        //returns 2-4 neighbors.  
        //neighbors are returned as an array of objects that contain a color, row, and col attribute
    getNeighbors = (row, col) => {
        let markers = this.state.markers;
        let above, below, left, right;
        let neighbors = [];
            //finds four neighbors
        try{
            try{
                above = {
                    color: markers[row - 1][col],
                    row: row - 1,
                    col: col
                }
                neighbors.push(above);
            } catch (e) {
                console.log(`no neighbor above`);
            }
            try{
                below = {
                    color: markers[row + 1][col],
                    row: row + 1,
                    col: col
                }
                neighbors.push(below);
            } catch (e) {
                console.log(`no neighbor below`);
            }
            try{
                left = {
                    color: markers[row][col - 1],
                    row: row,
                    col: col -1
                }
                    //checks for undefined before pushing to neighbors array
                if (left.color !== undefined) {
                    neighbors.push(left);
                }
            } catch (e) {
                console.log(`no left neighbor`);
            }
            try{
                right = {
                    color: markers[row][col + 1],
                    row: row,
                    col: col + 1
                }
                    //checks for undefined before pushing to neighbors array
                if (right.color !== undefined) {
                    neighbors.push(right);
                }
            } catch (e) {
                console.log(`no right neighbor`);
            }
            
        } catch (e) {
            console.log(`the defining neighbors function failed`);
        }
        return neighbors;
    }

        //helper function to replace the marker
    alterMarkerArray = (row, col, color) => {
        //stores all rows
        let parent = this.state.markers;
        let currentRow = parent[row];
        //stores rows up to, but not including to current row
        let prevRows = parent.slice(0, row);
        //stores rows after the current row
        let afterRows = parent.slice(row + 1);
        //slicing selected row
        let beforeSquare = currentRow.slice(0, col);
        let afterSquare = currentRow.slice(col + 1);
        //replaces clicked square
        let replacedSquare = color;
        let newRow = beforeSquare.concat(replacedSquare, afterSquare);
        //creates new array
        let newMarkers = prevRows.concat([newRow], afterRows);
        return newMarkers;
    }

    render(){
        return(
            <div>
                <Header />
                    {/* render board */}
                <Board 
                    markers = {this.state.markers}
                    handleClick = {this.handleClick}
                    blackIsNext = {this.state.blackIsNext}
                />
            </div>
            //Board will need 

        );
    }
}


export default App;