import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { user, loginUser } = useAuth();

    const onHandleSubmit = (data) => {
        console.log(data);
        loginUser(data);

        navigate("/");
    }
    if (user) {
        console.log('user already logged in');
        return
    }
    return (
        <div>
            <div>
                <form className='w-[300px] mx-auto my-12 flex flex-col gap-4 p-4 border border-gray-500 rounded-lg' onSubmit={handleSubmit(onHandleSubmit)}>
                    <h1 className='text-2xl font-bold text-center'>Login</h1>
                    <label htmlFor='name' className='font-semibold'>Name</label>
                    <input id='name' className='border border-gray-500 p-2 rounded-lg' type="text" {...register("name")} />
                    <label htmlFor='email' className='font-semibold'>Email</label>
                    <input id='email' className='border border-gray-500 p-2 rounded-lg' type="email" {...register("email")} />
                    <label htmlFor='password' className='font-semibold'>Password</label>
                    <input id='password' className='border border-gray-500 p-2 rounded-lg' type="password" {...register("password")} />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Auth