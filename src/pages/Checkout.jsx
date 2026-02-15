import { Button } from '@/components/ui/button';
import { useCartContext } from '@/context/CartContext';
import React from 'react'

const Checkout = () => {
    const { cart, removeFromCart } = useCartContext();

    const removeProduct = (product) => {
        removeFromCart(product);
    }
    return (
        <div className='pe-4 bg-gray-200'>
            <div className='p-12 py-4'>
                <h2 className='text-lg font-semibold mb-4 text-center'>Cart</h2>
                <div className='flex flex-wrap justify-center items-center gap-6'>
                    {cart.length === 0 ? <p className='text-center text-lg'>No products in cart</p> : null}
                    {cart.map(product => (
                        <div key={product.id} className='w-full max-w-[250px] border border-gray-200 hover:scale-105 bg-white'>

                            <img className='w-full' src={product.image} alt="" />
                            <div className='p-4 '>
                                <h3 className=' font-semibold'>{product.name}</h3>
                                <p className='text-gray-500'>{product.description}</p>
                                <div className='flex justify-between items-center mt-4'>
                                    <p className='text-blue-500 font-semibold'>₹ {product.price}</p>
                                    <Button className='bg-red-500' onClick={() => removeProduct(product)}>Delete</Button>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Checkout