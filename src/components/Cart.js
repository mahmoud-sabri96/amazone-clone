import React  from 'react';
import { Button, Col, FormControl, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
// import { Form } from 'react-router-dom';
import { CartState } from '../context/Context';
import Rating from './Rating';


const Cart = () => {
    const { state: { cart }, dispatch } = CartState();

    const total = cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0);

    const removeFromCartHandler = (id) => {
        dispatch({ type: "REMOVE-FROM-CART", payload: { id: id } })
    }

    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                    {cart.map(product => (
                        <ListGroup.Item>
                            <Row>
                                <Col md={2}>
                                    <Image src={product.img} alt={product.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <span>{product.name}</span>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div>
                                        <span>{product.price}$</span>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <Rating rating={product.rate} />
                                </Col>
                                <Col md={2}>
                                    <FormControl as="select" value={product.qty}
                                        onChange={(event) => dispatch({ type: "CHANGE-QTY", payload: { id: product.id, qty: event.target.value } })}
                                    >
                                        {[...Array(product.inStock)].map((_, i) => (
                                            <option key={i}>{i + 1}</option>
                                        ))
                                        }
                                    </FormControl>
                                </Col>
                                <Col md={1}>
                                    <Button type="button" variant='light' onClick={removeFromCartHandler.bind(null, product.id)}>
                                        <AiFillDelete
                                            fontSize='20px'
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className='filters summary'>
                <div className="content">
                    <span className='title fw-bold h4'>Subtotal ({cart.length}) items</span>
                    <p style={{ fontWeight: 700, fontSize: 20, marginTop: 20 }}> Total: {total} $</p>
                </div>
                <Button type="button" className="w-100" disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div >
    )
}

export default Cart