import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { useCartContext } from '@/context/CartContext'
import { Feather } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { cart } = useCartContext();
    const { user, logoutUser } = useAuth();
    return (
        <div className='flex justify-between items-center px-12 py-4 border border-b-gray-200'>
            <div className='flex justify-between items-center gap-3 m-2 text-lg font-semibold text-green-500'>
                <Feather size={20} strokeWidth={1.5} />
                <p>ShopHub</p>
            </div>
            <div>
                <div className='flex justify-between items-center gap-8'>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='flex justify-between items-center gap-4'>

                {user ? (
                    <>
                        <span>{user.name || user.email}</span>
                        <Link to='/auth'><Button className='bg-red-500' onClick={() => logoutUser()}>Logout</Button></Link>
                    </>
                ) : (
                    <Link to='/auth'><Button className='bg-green-500'>Login</Button></Link>
                )}
                <Link to='/checkout'><Button>Cart ({cart.length})</Button></Link>
            </div>
        </div>
    )
}

export default Navbar