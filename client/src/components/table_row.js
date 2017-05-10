import React from 'react'

const TableRow = (props) => {
  const clickHandler = props.onClick

  return (
    <tr onClick={clickHandler}>
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

