import React from 'react'

function Attendant({attendant}) {
  return (
    <tr>
        <th scope="row">{attendant.id}</th>
             <td>{attendant.firstName}</td>
             <td>{attendant.lastName}</td>
             <td>{attendant.phoneNo}</td> 
             <td>{attendant.dateJoined}</td>
    </tr>
  )
}

export default Attendant