import React, { Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container, FormControl, Dropdown, Badge, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';



// var x = window.location.pathname;

const Header = () => {

    const { state: { cart }, dispatch, filterDispatch } = CartState();

    // console.log(cart)
    const removeFromCartHandler = (id) => {
        dispatch({ type: "REMOVE-FROM-CART", payload: { id: id } })
    }

    const dropDownContent = (
        <Fragment>
            {
                cart.map((product) => (
                    <span className='cartitem' key={product.id}>
                        <img
                            src={product.img}
                            className='cartItemImg'
                            alt={product.name}
                        />
                        <div className='cartItemDetail'>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                        </div>
                        <AiFillDelete
                            fontSize='20px'
                            style={{ cursor: 'pointer' }}
                            onClick={removeFromCartHandler.bind(null, product.id)}
                        />
                    </span>
                ))
            }
            <Link to="/cart">
                <Button style={{ width: "90%", margin: "0 10px" }}>Go To Cart</Button>
            </Link>
        </Fragment>
    )

    return (
        <Navbar bg="dark" variant='dark' >
            <Container className='justify-content-around'>
                <Navbar.Brand>
                    <Link to="/" className='h3'><span className="text-warning h2 fw-bold">A</span>mazone</Link>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl className="search m-auto"
                        placeholder="Search a Product"
                        style={{ width: 400 }}
                        onChange={(e)=>filterDispatch({
                            type:"FILTER-BY-SEARCH",
                            payload:e.target.value
                        })}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic" >
                            <FaShoppingCart icon="fa-solid fa-cart-shopping"  className='text-white'/>
                            <Badge className='bg-info p-0 ms-2'>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="overflow-auto" >
                            {cart.length > 0 ? (dropDownContent) : (<span style={{ padding: 10 }}>cart is empty!</span>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Header