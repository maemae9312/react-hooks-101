import React from 'react'

export default function OperationLog({ operationLog }) {
  
  return(
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}