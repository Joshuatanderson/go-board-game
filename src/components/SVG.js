import React, {PureComponent} from 'react';

class SVG extends PureComponent{
    state = {

    }
    render(){
        const {
            marker,
            row,
            col,
            handleClick,
            blackIsNext
        } = this.props
    console.log('svg rendered');

        return(
            <svg onClick = {() => handleClick(row, col, blackIsNext)} className = {`svg ${marker}`} id="svg" viewBox="0 0 50 50">
                <g id="square">
                    <rect fill="#8e593c" className="svg-rect has-background-light"/>
                    <line fill = "#888" className="svg-line" x1="50" y1="25" y2="25"/>
                    <line className="svg-line" x1="25" y1="50" x2="25"/>
                </g>
                    {/* sets marker to correct piece */}
                <circle id="marker" className={`${marker}`} cx="25" cy="25" r="8"/>
            </svg>
        );
    }
}

export default SVG;