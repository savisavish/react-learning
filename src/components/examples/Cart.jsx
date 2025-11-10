import { useCart } from '../context/Product_context';
import './product.css';
import { Button } from '@mui/material';
function Cart() {
    const { cart, deleteCartItem} = useCart();
    console.log(cart.length)
    if (cart.length === 0) {
      return <p>Your cart is empty</p>;
    }

    return (
        <div className="cart-content">
            <div className="cart-content-left">
                <h2>CART DETAILS</h2>
                {cart.map((product, index) => (
                    <div key={index} className="cart-card-items">
                        <img src={product.images[0]} alt={product.title} width={80} />
                        <span>{product.title}</span>
                        <span>Qty: {product.qty}</span>
                        <span>${product.price}</span>
                        <button onClick={()=>deleteCartItem(product.id)}>Del</button>
                    </div>
                ))}
            </div>
            <div className="cart-content-left"></div>
        </div>
    );
    {
        /* <div className="cart-content">
          <div className="cart-content-left">
          {cart.map((product, index) => (
              <div key={index} className="cart-card-items">
                <img src={product.images[0]} alt={product.title} width={100} />
                <h3>{product.title}</h3>
                <h3>QTY</h3>
                <span>Price</span>
                <span>Stock</span>
              </div>
            ))}
            <div className="placeorder-container">
              <Button variant="contained" color="primary">PLACE ORDER</Button>
            </div>
          </div>
          <div className="cart-content-right">Right Content</div>
        </div> */
    }
}

export default Cart;
