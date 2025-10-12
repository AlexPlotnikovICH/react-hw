function OrderStatus({ orderId, status }) {
return (
    <div>
      <h3>Order ID: {orderId}</h3>
      <p>Status: {status}</p>
    </div>
  );
}

export default OrderStatus;