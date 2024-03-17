import { useState } from "react";

export default function ProductCard({prod}) {

    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount+1);
    }

    const removeFromCart = () => {
        setCartCount(cartCount-1);
    }

    return (
        <div className="productCard" key={prod.id}>
            <div>
                <h3 className="productTitle">{prod.title}</h3>
                <p className="productPrice">
                    <span>Price </span>
                    $ {prod.price}
                </p>
                <img src={prod.image} alt="Image Not Found!"/>
            </div>
            {
                cartCount===0 
                    ? 
                <button className="addToCart" onClick={addToCart}>Add to Cart</button>
                    : 
                <div>
                    <button className="dec" onClick={removeFromCart}>Remove</button>
                    <span className="itemCounter"> {cartCount} </span>
                    <button className="inc" onClick={addToCart}>Add</button>
                </div>
            }
        </div>
    );
}