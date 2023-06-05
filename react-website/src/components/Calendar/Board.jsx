import React from 'react';
import './Board.css';

function Board(props) {
    return (
        <div className="grid-container" id="grid-container">
            {Array(15)
                .fill(0)
                .map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {Array(5)
                            .fill(0)
                            .map((col, colIndex) => (
                                <div key={colIndex} className="grid-item"></div>
                            ))}
                    </div>
                ))}
            {
                props.events.map((event, key) => {
                    let eventElement = (
                        <div className='event'
                            style={{
                                backgroundColor: "#2F589D",
                                top: `${(event.timeStart - 7) * 6.666}%`,
                                left: `${(event.day - 1) * 20}%`,
                                width: '20%',
                                height: `${(event.timeEnd - event.timeStart) * 6.666}%`
                            }}>
                            <div className='event-content' >
                                <div>{event.name}</div>
                                <div>{event.timeDisplay}</div>
                                <div>{event.location}</div>
                            </div>
                        </div>

                    );
                    return eventElement;
                })
            }

        </div >
    );
}

export default Board;