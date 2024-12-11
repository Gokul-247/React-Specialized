import React, {useEffect, useState} from 'react'


const RandomUserMePage = () => {
    const apiurl = "https://dummyjson.com/products"

    const[apiData, setApiData] = useState([])

    useEffect(() => {

        fetch(apiurl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setApiData(data.products);

            console.log(data.products);
            
        })
        .catch( (err) => {
            console.log("Error in fetching data : "+err)})
    },[])
  return (
    <div>
        <h1>Random Product Details are :</h1>
        {apiData.map((oneData) => (
            <div>
                <table>
                    <tr>
                        <p><b>Product id: </b>{oneData.id}</p>
                        <p><b>Product Title: </b>{oneData.title}</p>
                        <p><b>Description: </b>{oneData.description}</p>
                        <p><b>Category: </b>{oneData.category}</p>
                        <p><b>Price: </b>{oneData.price}</p>
                    </tr>
                </table>
            </div>   
        ))}

    </div>
  )
}

export default RandomUserMePage