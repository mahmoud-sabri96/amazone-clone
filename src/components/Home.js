import React from 'react';
import "./style.css"
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';


const Home = () => {

    const { state: { products }, filterState: { sort, byStock, byFastDelivery, byRating, searchQuery } } = CartState();

    const transformProduct = () => {
        let sortedProducts = products;

        if (sort && sort === "LowToHigh") {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
            // sortedProducts = sortedProducts.sort((a, b) => sort === "LowToHigh" ? a.price - b.price : b.price - a.price)
        } else if (sort && sort === "HighToLow") {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((product) => product.inStock > 0)
        }
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((product) => product.fastDelivery === true)
        }
        if (byRating > 0) {
            sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating)
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().startsWith(searchQuery));
        }
        return sortedProducts
    }

    // console.log(transformProduct())
    return (
        <div className='home'>
            <Filters />
            <div className='productContainer  ms-auto'>
                {transformProduct().map(product => (
                    <SingleProduct
                        id={product.id}
                        key={product.name}
                        name={product.name}
                        rate={product.ratings}
                        price={product.price}
                        img={product.image}
                        inStock={product.inStock}
                        fastdelivery={product.fastDelivery}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home