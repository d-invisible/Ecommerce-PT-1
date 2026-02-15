import { Button } from '@/components/ui/button';
import { useCartContext } from '@/context/CartContext';
import { getProducts } from '@/data/products'
import React from 'react'

const Home = () => {
    const products = getProducts();

    const { setCart, removeFromCart, checkInCart } = useCartContext();

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
    }

    const removeProduct = (product) => {
        removeFromCart(product);
    }

    return (
        <div className='pe-4 bg-gray-200'>
            <div className='text-center p-4'>
                <h1 className='text-4xl font-bold'>Welcome to ShopHub</h1>
                <p className='text-lg mt-4'>ShopHub is a one stop shop for all your shopping needs</p>
            </div>
            <div className='p-12 py-4'>
                <h2 className='text-lg font-semibold mb-4 text-center'>Products</h2>
                <div className='flex flex-wrap justify-center items-center gap-6'>
                    {products.map(product => (
                        <div key={product.id} className='w-full max-w-[250px] border border-gray-200 hover:scale-105 bg-white'>

                            <img className='w-full' src={product.image} alt="" />
                            <div className='p-4 '>
                                <h3 className=' font-semibold'>{product.name}</h3>
                                <p className='text-gray-500'>{product.description}</p>
                                <div className='flex justify-between items-center mt-4'>
                                    <p className='text-blue-500 font-semibold'>₹ {product.price}</p>
                                    {checkInCart(product) ? <Button className='bg-red-500' onClick={() => removeProduct(product)}>Delete</Button> :
                                        <Button className='bg-gray-500' onClick={() => addToCart(product)}>Add to Cart</Button>}
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home