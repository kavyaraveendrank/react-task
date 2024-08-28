import React, { useEffect, useState } from 'react';
import { useCart } from '../Hooks/Hooks';

const CartShop = () => {

    const { cart, setCart } = useCart()

    const getGrandTotal = () => {
        if (cart.length === 0) {
            return 0
        }
        const sum = cart.reduce((prevTotal, element) => prevTotal + element.totalPrice, 0)
        return sum
    }

    const [grandTotal, setGrandTotal] = useState(getGrandTotal())
    const removeItem = (removeId) => {
        const response = confirm("Are you sure?")
        if (!response) return;
        const res = cart.filter(item => item.id != removeId)
        setCart(res)
    }

    useEffect(() => {
        setGrandTotal(getGrandTotal())
    }, [cart])

    const handleQtyUpdate = (operator, id) => {
        const product = cart.find(item => item.id == id)
        if (!product) return;
        if (operator == "-" && product.qty == 1) {
            const res = confirm("Are you sure?")
            if (res) {
                return removeItem(id)
            }
            return;
        }
        const res = cart.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    qty: operator == "+" ? item.qty + 1 : item.qty - 1,
                    totalPrice: operator == "+" ? item.price * ( item.qty + 1 ) : item.price * ( item.qty - 1 )
                }
            }
            return item
        })
        setCart(res)
    }

    return (
        <div className='w-screen flex flex-col px-6 mt-5'>
            <h1 className='text-center'>Cart Data</h1>
            <div className='mt-4 flex flex-wrap gap-3 px-6 justify-center'>
                {
                    cart.map(item => {

                        const rate = item.rating.rate

                        return (
                            <div key={item.id} className='w-52 bg-white pb-2 border-8'>
                                <div className='p-2'>
                                    <img src={item.image} alt={item.title} className='aspect-square'/>
                                </div>
                                <div className='px-2 text-center'>
                                    <p>{item.title.slice(0,15)}...</p>
                                    <div className='flex justify-between mt-3'>
                                        <p className={`flex items-center ${rate < 2 ? "text-red-600" : (rate >= 2 && rate < 4) ? "text-yellow-600" : "text-green-600"}`}>
                                            {rate} <i className='fa fa-star' /></p>
                                        <p>${ item.price }</p>
                                    </div>
                                    <div className='my-2 flex justify-between items-center'>
                                        <button onClick={() => handleQtyUpdate("-", item.id)} className='w-10 h-10 bg-green-600 text-white text-xl'>-</button>
                                        <p>{item.qty}</p>
                                        <button onClick={() => handleQtyUpdate("+", item.id)} className='w-10 h-10 bg-green-600 text-white text-xl'>+</button>
                                    </div>
                                    <div className='py-1 flex justify-between'>
                                        <p className=''>Total Price:</p>
                                        <p className=''>${item.totalPrice.toFixed(2)}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-2'>
                                        <button onClick={() => removeItem(item.id)}
                                            type="button"
                                            className='bg-red-600 text-white p-1 w-full'>
                                            <i className='fa fa-trash' /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='mt-3 text-center'>Grand Total</h1>
            <div className='mb-5 mt-8 flex justify-center'>
                Grand Total: <span>${grandTotal.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default CartShop;