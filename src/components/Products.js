import React from 'react'
import JsonData from '../components/JsonData.json'
import { useDispatch } from 'react-redux'
import { incrementcart, decrementcart } from '../toolkit/reducer/cartReducer'

const Products = () => {
    const dispatch = useDispatch()
    return(
        <div>
            <div className='container'>
                <div className='row'>
                    {JsonData.products.map((product) => 
                    <div className='col' key={product.id}>
                        <div className='card m-1'>
                            <img src={product.src} />
                            <p className='card-title'>{product.name} | {product.price}</p>
                            <div className='card-body'>
                                <button className='btn btn-primary ml-auto' onClick={() => dispatch(incrementcart({
                                    productName: product.name,
                                    productPrice: product.price,
                                }))}>Add</button>
                                <button className='btn btn-primary ml-auto' onClick={() => dispatch(decrementcart({
                                    productName: product.name,
                                    productPrice: product.price,
                                }))}>Remove</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products