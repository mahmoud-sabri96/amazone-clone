import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Filters = () => {


    const { filterState: { sort, byStock, byFastDelivery, byRating }, filterDispatch } = CartState();

    // console.log(sort, byStock, byFastDelivery, byRating, searchQuery);

    const onRateHandler = (i) => {
        filterDispatch({ type: "FILTER-BY-RATING", payload: i + 1 })
    }

    return (
        <div className='filters'>
            <h4 className='title'>Filter product</h4>
            <span>
                <Form.Check
                    label="Asceding"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => filterDispatch({
                        type: "SORT-BY-PRICE",
                        payload: "LowToHigh"
                    })}
                    checked={sort === "LowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    label="Decceding"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => filterDispatch({
                        type: "SORT-BY-PRICE",
                        payload: "HighToLow"
                    })}
                    checked={sort === "HighToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    label="Include Out Of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() => filterDispatch({
                        type: "FILTER-BY-STOCK",
                    })}
                    checked={byStock}
                />
            </span>

            <span>
                <Form.Check
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() => filterDispatch({
                        type: "FILTER-BY-DELIVERY",
                    })}
                    checked={byFastDelivery}
                />
            </span>

            <span>
                <label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating rating={byRating} onRate={onRateHandler} />
            </span>

            <Button className='clear w-100 mx-auto mt-5' variant="light" onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}> CLear Filters</Button>

        </div>

    )
}

export default Filters