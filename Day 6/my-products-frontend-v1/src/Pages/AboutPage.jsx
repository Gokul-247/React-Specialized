import React from 'react'
import "../Assets/CSS/about.css"
import profilepic from "../Assets/Images/face.jpg";
import Info from '../Components/Info';
import ChildA from '../Components/ChildA';

const AboutPage = () => {
  return (
    <div >
      <h1>About Page</h1>
      <table>
        <tr>
          <td><Info p_image={profilepic} 
          myName='ABC' email='ABC@gmail.com' coNumber='9487983456'
          /></td>
          <td><Info p_image={profilepic} 
          myName='DEF' email='DEF@gmail.com' coNumber='9487983456'
          /></td>
          <td><Info p_image={profilepic} 
          myName='HIJ' email='HIJ@gmail.com' coNumber='9487983456'
          /></td>
        </tr>  
      </table>
    </div>
  )
}

export default AboutPage