import React, {useState} from 'react';
import StarBlock from '../StarBlock/StarBlock';
import GreetingsBlock from '../GreetingsBlock/GreetingsBlock';
const Block = () => {
    const [value, setValue] = useState(0)
    const [completed, setCompleted] = useState(false)
    let element;
    const handleChange = (e) => {
        setValue(e)
    }
    const handleClick = () => {
        setCompleted(true)
    }
    if (!completed) {
        element = <StarBlock handleClick={handleClick} value={value} handleChange={handleChange}/>
    }
    else if(completed) {
        element = <GreetingsBlock selected={value} />
    }
    return(
        <div>
            {element}
        </div>
    )
};

export default Block;
