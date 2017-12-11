import React from 'react';

export default (props) => {
    return (
        <div className="cell-box" onClick={props.onClick}>
         { props.value }
        </div>
    );
}