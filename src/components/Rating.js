import React from 'react'
import { AiFillStar, AiOutlineStar, } from 'react-icons/ai';

const Rating = (props) => {
    return (
        < div >
            {
                [...Array(5)].map((_, i) => (
                    <span className='rateStar' key={i} style={{ cursor: "pointer" }} onClick={() => props.onRate(i)} >
                        {props.rating > i ? (<AiFillStar fontSize="15px" />) : (<AiOutlineStar fontSize="15px" />)}
                    </span>
                ))
            }
        </div >
    );
};

export default Rating