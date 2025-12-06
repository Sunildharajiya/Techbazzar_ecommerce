import "../css/yourOrders.css";

const dummyOrders = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    orderId: "TBZ-1001",
    status: "delivered"
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    orderId: "TBZ-1002",
    status: "undelivered"
  }
];

const YourOrders = () => {
  return (
    <div className="orders-page">
      <h2>Your Orders</h2>

      <div className="orders-list">
        {dummyOrders.map((item) => (
          <div key={item.id} className="order-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Order ID: {item.orderId}</p>

            {/* ✅ Status */}
            <span
              className={
                item.status === "delivered"
                  ? "status delivered"
                  : "status undelivered"
              }
            >
              {item.status === "delivered" ? "Delivered" : "Not Delivered Yet"}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default YourOrders;