import { Button } from '@/components/ui/button'
import { Feather } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <Link to='/checkout'><Button>checkout</Button></Link>
                <Link to='/auth'><Button>Login</Button></Link>
            </div>
        </div>
    )
}

export default Navbar