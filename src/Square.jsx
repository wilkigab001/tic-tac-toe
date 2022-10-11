import React from "react";

const Square = (props) => {
    return (
    <div className="square">
            {console.log(props.squares,props.player, props.setSquares, props.setPlayer)}
    </div>
    );
};

export default Square