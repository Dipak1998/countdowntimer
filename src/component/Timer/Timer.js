import React from 'react';
import './Timer.css';

function Timer({day,hour,minute,second}) {
    return (
        <div className="timer-container">
        <div className="count-down-time">
        <h1>Time Left</h1>
            <span>{`${day}d`}</span>
            <span>{`${hour}h`}</span>
            <span>{`${minute}m`}</span>
            <span>{`${second}s`}</span>
        </div>
    </div>
    )
}

export default Timer;