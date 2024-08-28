import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Loading from './Loading';

const NewProducts = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const getProductList = async () => {
        const limit = 10
        const skip = ( currentPage - 1 ) * 10
        const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        setProducts(response.data.products) 
        if (totalPage == 0) {
            setTotalPage(Math.ceil(response.data.total / limit))
        }
        setLoading(false)
    }

    useEffect(() => {
        getProductList()
    }, [currentPage])

    return (
        <Fragment>
            <div className='mt-20 flex justify-center gap-3 flex-wrap'>
                {
                    isLoading && <Loading />
                }
                {
                    !isLoading && products.map(item => {
                        console.log(item.title)
                        return (
                            <div key={item.id} className='w-52 text-white text-center border-4 p-2'>
                                <div className='w-52 h-52'>
                                    <img src={item.images[0]} alt={item.title} className='aspect-square w-52 h-52 object-contain'/>
                                </div>
                                <div>
                                    <p style={{color:"black",fontSize:'20px'}}>{ item.title }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center gap-3 mt-10'>
                {
                    new Array(totalPage).fill(0).map((_, index) => index + 1).map(item => {
                        return (
                            <button onClick={() => setCurrentPage(item)} key={item} className='text-white bg-green-600 outline-none border-none w-10 h-10'>{item}</button>
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default NewProducts;