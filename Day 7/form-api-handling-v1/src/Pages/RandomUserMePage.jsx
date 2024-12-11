import React, {useEffect, useState} from 'react'


const RandomUserMePage = () => {
    const apiurl = "https://randomuser.me/api/?results=5"

    const[apiData, setApiData] = useState([])

    useEffect(() => {

        fetch(apiurl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setApiData(data.results);
            console.log(data.results);
            
        })
        .catch( (err) => console.log("Error in fetching data : "+err))
    },[])
  return (
    <div>
        <h1>Random User Details are :</h1>
        {apiData.map((oneData) => (
            <div>
                <p>Name: {oneData.name.first} {oneData.name.last}</p>
                <p>Email: {oneData.email}</p>
            </div>   
        ))}

    </div>
  )
}

export default RandomUserMePage