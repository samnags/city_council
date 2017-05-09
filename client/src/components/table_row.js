import React from 'react'

const TableRow = (props) => {
  return (
    <tr>
      <td>
        {props.firstName}
      </td>
      <td>
        {props.lastName}
      </td>
      <td>
        {props.district}
      </td>      
    </tr>
  )
}


module.exports = TableRow
