import { createContext, useContext, useState } from "react";


const CartContext = createContext();




const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const removeFromCart = (product) => {
        setCart(prev => prev.filter(item => item.id !== product.id));
    }

    const checkInCart = (product) => {
        return cart.some(item => item.id === product.id);
    }

    const value = {
        cart,
        setCart,
        removeFromCart,
        checkInCart
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;


export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartContextProvider")
    }
    return context
}








