const total = (items = []) => {
  const total_price = items.reduce((acc, cur) => {
    return acc + cur.product.price * cur.quantity;
  }, 0);
  return total_price;
};

export default total;
