import React from 'react'

const CreateTable = ({res}) => {
  return (
    <tr key={res.id}>
        <td>{res.id}</td>
        <td>{res.first_name}</td>
        <td>{res.last_name}</td>
        <td>{res.email}</td>
    </tr>
  )
}

export default CreateTable