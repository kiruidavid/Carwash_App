import React from 'react'

function Attendant({attendant}) {
  return (
    <tr>
        <th scope="row">{attendant.id}</th>
             <td>{attendant.first_name}</td>
             <td>{attendant.last_name}</td>
             <td>{attendant.phone_number}</td> 
             <td>{attendant.date_joined}</td>
    </tr>
  )
}

export default Attendant