import React from 'react';

export default (props) => {
    return (
        <div className="cell_box" onClick={props.onClick}>
         { props.value }
        </div>
    );
}