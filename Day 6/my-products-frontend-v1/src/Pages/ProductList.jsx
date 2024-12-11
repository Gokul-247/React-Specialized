import React from 'react'
import products from "../Assets/Static/product.json"
const ProductList = () => {
  return (
    <div>
        <table border={2} cellPadding={5} cellSpacing={0}>
            <caption>List of Products</caption>
            <thead>
                <tr>
                    <td><b>Id</b></td>
                    <td><b>Name</b></td>
                    <td><b>Quantity</b></td>
                    <td><b>Description</b></td>
                    <td><b>GST</b></td>
                    <td><b>Price</b></td>
                    <td><b>Category</b></td>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr>
                        <td>{product.p_id}</td>
                        <td>{product.p_name}</td>
                        <td>{product.p_qty}</td>
                        <td>{product.p_desc}</td>
                        <td>{product.p_gst}</td>
                        <td>{product.p_price}</td>
                        <td>{product.p_cat}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductList