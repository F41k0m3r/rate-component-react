import React from 'react';
import './GreetingsBlock.css'
const GreetingsBlock = ({selected}) => {
    return (
        <div className='wrap'>
            <div className="thanks-img"/>
            <div className="selected">
                <h3 className="selected-text">You selected {selected} of 5</h3>
            </div>
            <h1 className="main-thanks">Thank you!</h1>
            <h3 className="sub-thanks">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</h3>
        </div>
    );
};

export default GreetingsBlock;
