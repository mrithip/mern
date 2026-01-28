import { Link } from "react-router-dom";
const Products = () => {
  const products = [
    { id: 1, name: "RTX 4050", price: "40000" },
    { id: 2, name: "INTEL CORE i9", price: "90000" },
    { id: 3, name: "GIGABYTE 16GB", price: "6000" },
    { id: 4, name: "LG OLED MONITOR", price: "100000" }
  ];
  return (
    <>
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <h5>₹{product.price}</h5>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
