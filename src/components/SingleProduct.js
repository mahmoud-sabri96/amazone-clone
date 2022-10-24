import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'
const SingleProduct = (props) => {
    const { state: { cart }, dispatch } = CartState();

    const removeFromCartHandler = () => {
        dispatch({ type: "REMOVE-FROM-CART", payload: { id: props.id } });
    }
    const addToCartHandler = () => {
        // console.log('add')
        dispatch({
            type: "ADD-TO-CART",
            payload: { id: props.id, name: props.name, price: props.price, img: props.img, rate: props.rate, inStock: props.inStock }
        });
    };


    return (
        <div className='product'>
            <Card style={{ width: '100%', minHeight: "450px" }} className="mb-4">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>{props.price}$</span>
                        {props.fastdelivery ? (<div>fastDelivery</div>) : (<div>4 days Delivery</div>)}
                        <Rating rating={props.rate} />
                    </Card.Subtitle>
                    {
                        cart.some(ele => ele.id === props.id) ?
                            (<Button onClick={removeFromCartHandler} variant='danger'>Remove from cart</Button>) :
                            (<Button onClick={addToCartHandler} disabled={!props.inStock}>{!props.inStock ? "Out Of Stock" : "Add To Cart"}</Button>)
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct