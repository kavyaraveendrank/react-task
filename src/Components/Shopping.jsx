import React, { Fragment, useEffect, useState } from 'react';
import { products as productList } from '../Constants/Products';
import CartShop from './CartShop';
import { useCart } from '../Hooks/Hooks';

const Shopping = () => {

    const { cart, setCart } = useCart()
    const [query, setQuery] = useState("")
    const [products, setProducts] = useState([...productList])
    const [sort, setSort] = useState("None")

    useEffect(() => { 
        const debouncing = setTimeout(() => {
            const result = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
            setProducts(result)
        }, 1200);
        return () => {
            clearTimeout(debouncing)
        }
    }, [query])

    const handleAddCart = (item) => {
        const index = cart.findIndex((product) => product.id === item.id)
        if (index == -1) {
            item.qty = 1
            item.totalPrice = item.price
            setCart([item, ...cart])
        } else {
            const res = cart.map(product => {
                if (product.id == item.id) {
                    return {
                        ...product,
                        qty: product.qty + 1,
                        totalPrice: product.price * ( product.qty + 1 ) 
                    }
                }
                return product
            })
            setCart(res)
        }
    }

    const handleSort = (value) => {
        console.log(value);
        
        if (value == "0") {
            
            console.log(productList);
            return setProducts(productList)
        }
        setProducts(prev => {
            const res = products.sort((a, b) => {
                if (value == "low-high") {
                    return a.price - b.price
                }
                if (value == "high-low") {
                    return b.price - a.price
                }

            })
            console.log(res);
            
            return res 
        })
    }

    return (
        <Fragment>
            <div className='mt-20 gap-2 px-2 md:px-0 flex justify-center'>
                <input className='border-4 p-2.5 w-full md:w-[500px]' type="text" placeholder='Search...' value={query} onChange={({ target }) => setQuery(target.value)}/>
                <select onChange={({ target }) => {
                    setSort(target.value)
                    handleSort(target.value)
                }} defaultValue={sort} className='border-4'>
                    <option value="0">None</option>
                    <option value="low-high">Low to High</option>
                    <option value="high-low">High to Low</option>
                </select>
            </div>
            <div className='mt-5 flex flex-wrap gap-3 px-6 justify-center'>
                {
                    products.map(item => {

                        const rate = item.rating.rate

                        return (
                            <div key={item.id} className='w-52 bg-white pb-2 border-8'>
                                <div className='p-2'>
                                    <img src={item.image} alt={item.title} className='aspect-square'/>
                                </div>
                                <div className='px-2 text-center'>
                                    <p>{item.title.slice(0,15)}...</p>
                                    <div className='flex justify-between mt-3'>
                                        <p
                                            className={`flex items-center ${rate < 2 ? "text-red-600" : (rate >= 2 && rate < 4) ? "text-yellow-600" : "text-green-600"}`}>
                                            {rate} <i className='fa fa-star' /></p>
                                        <p>${ item.price }</p>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-2'>
                                        <button onClick={() => handleAddCart(item)} type="button" className='bg-cyan-800 text-white p-1 w-full'>
                                            <i className='fa fa-cart-shopping' /> Add To Cart</button>
                                        <button type="button" className='bg-green-400 text-white p-1 w-full'><i className='fa fa-dollar'/> Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <CartShop />
        </Fragment>
    );
}

export default Shopping;