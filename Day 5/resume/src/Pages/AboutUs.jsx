import React from 'react'

const AboutUs = () => {
    const details = {
        e_name: 'Gokul',
        e_email: 'gokul@gmail.com',
        e_dob: 'dd-mm-yyyy',
        e_status: 'Intern',
        e_hobby: ['Driving','Hearing to music'],
        e_address: {
            addline_1: 'Bangalore',
            pincode: 500001,
            landmark: 'PTT'
        },
        e_company_name: 'Deloitte',
        e_emp_type: 'EAD'
    }
  return (
    <div>
        <h1>Employeee Details</h1>
        <table cellSpacing='0' border='5' cellPadding='10'>
            <tr>
                <th>Employee Name</th>
                <td>{details.e_name}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{details.e_email}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>{details.e_dob}</td>
            </tr>
            <tr>
                <th>Status</th>
                <td>{details.e_status}</td>
            </tr>
            <tr>
                <th>Hobby</th>
                <td>{details.e_hobby[0]} {details.e_hobby[1]}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{details.e_address.addline_1} {details.e_address.pincode} {details.e_address.landmark}</td>
            </tr>
            <tr>
                <th>Company</th>
                <td>{details.e_company_name}</td>
            </tr>
            <tr>
                <th>Employment Type</th>
                <td>{details.e_emp_type}</td>
            </tr>
        </table>
    </div>
  )
}

export default AboutUs