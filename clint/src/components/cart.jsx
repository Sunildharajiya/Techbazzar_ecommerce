import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

import "../css/cart.css";
const initialItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    qty: 1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1799,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    qty: 2,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialItems);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((t, i) => t + i.price * i.qty, 0);

  return (
    <div className="cart-page w-full p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <Card key={item.id} className="cart-card shadow-md">
              <CardContent className="flex gap-4 items-center p-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>

                  {/* Qty Control */}
                  <div className="flex items-center gap-3 mt-3">
                    <Button
                      onClick={() => decreaseQty(item.id)}
                      className="qty-btn"
                    >
                      −
                    </Button>
                    <span className="qty-number">{item.qty}</span>
                    <Button
                      onClick={() => increaseQty(item.id)}
                      className="qty-btn"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Remove Item */}
                <Button
                  variant="destructive"
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  <Trash2 size={18} />
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Total Section */}
      {cart.length > 0 && (
        <div className="total-box max-w-3xl mx-auto mt-8">
          <h3 className="total-amount">Total: ₹{total}</h3>
          <Button className="checkout-btn w-full">Checkout</Button>
        </div>
      )}
    </div>
  );
}