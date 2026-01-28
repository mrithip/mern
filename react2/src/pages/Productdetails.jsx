import { useParams } from "react-router-dom"

const Productdetails = () => {
      const products = [
    { id: 1, name: "RTX 4050", price: "40000",description: "This is a powerful GPU"},
    { id: 2, name: "INTEL CORE i9", price: "90000",description: "Intel's Top Most Chipset"},
    { id: 3, name: "GIGABYTE 16GB", price: "6000",description: "This is gigabyte's Ram"},
    { id: 4, name: "LG OLED MONITOR", price: "100000",description: "Experience the Lg's visually appealing Gaming OLED Monitor"}
  ]
  const {id}=useParams()
  const product=products.find((p) => p.id==Number(id))
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.name}</h2> 
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}

export default Productdetails
