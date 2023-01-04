import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './StarBlock.css'
const StarBlock = ({handleClick, value, handleChange}) => {
    return (
        <div className="stars-wrap">
            <div className="top-star">★</div>
            <h1 className="main-text">How did we do?</h1>
            <h3 className="sub-text">Please let us know how we did with your support request. All feedback is
                appreciated to help us improve our offering!</h3>
            <div className={'stars'}>
                <ReactStars
                    onChange={e => handleChange(e)}
                    value={value}
                    count={5}
                    isHalf={false}
                    size={window.innerWidth > 2500 ? 150 : 50}
                    color={'hsl(216, 12%, 54%)'}
                    activeColor={'hsl(25, 97%, 53%)'}
                />
            </div>
            <button onClick={handleClick} className="submit">SUBMIT</button>
        </div>
    );
};

export default StarBlock;
