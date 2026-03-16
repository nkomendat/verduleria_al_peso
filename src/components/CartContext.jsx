import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            const updatedCart = cart.map(prod => 
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + quantity }
                    : prod
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const getTotalItems = () => {
    return cart.length;
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};