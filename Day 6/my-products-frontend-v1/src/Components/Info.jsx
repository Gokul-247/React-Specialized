import React from 'react'
import '../Assets/CSS/about.css'

const Info = ({p_image="default", myName="default",email="default",
    coNumber="default"}) => {
  return (
    <div className='card'>
      <img src={p_image} style={{alignSelf:"center",height:"100px", width:"100px", borderRadius:"50%"}}/>
      <div className='container'>
        <p><b>Name : </b>{myName}</p>
        <p><b>Email : </b>{email}</p>
        <p><b>Contact Number : </b>{coNumber}</p>
      </div>
    </div>
  )
}

export default Info