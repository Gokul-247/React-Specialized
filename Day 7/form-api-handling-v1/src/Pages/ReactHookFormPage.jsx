import React from 'react'
import {useForm} from "react-hook-form"

const ReactHookFormPage = () => {
    const { register, formState: { errors}, handleSubmit} = useForm()

    function DisplayData(data){
        alert(`Data received succesfully ${data.fname}\n ${data.email}\n ${data.password}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(DisplayData)}>
            <label>Full Name</label>
            <input 
            { ...register('fname',{
                required: "Full Name is required",
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Full name should contain only letters",
                },
            })}
            type="text" />
            <br />
            {errors.fname && <p style={{color:'red'}}>{errors.fname.message}</p>}
            <label>Email:</label>
            <input 
            { ...register('email',{
                required: 'email is mandatory',
            }
            )}
            type="email" />
            <br />
            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
            <label>Password:</label>
            <input 
            { ...register('password',{
                required: 'password is mandatory',
            }
            )}
            type="password" /> 
            {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}    
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReactHookFormPage